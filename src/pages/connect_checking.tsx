import { useRouter } from "next/router"
import React, { useCallback, useEffect } from "react"
import { useState } from "react"
import { usePlaidLink, PlaidLinkOptions } from "react-plaid-link"
import { createAccount, getLink } from "../api/api"
import AdditionalInfoModal from "../components/AdditionalInfoModal/AdditionalInfoModal"
import Button from "../components/Button/Button"
import NavBar from "../components/NavBar/NavBar"



const ConnectCheckingAccountPage = () => {
	const [token, setToken] = useState(null)
	const [isLoading, setLoading] = useState(false)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [account, setAccount] = useState(null)
	const [requiredInformation, setRequiredInformation] = useState(null)
	const router = useRouter()

	const createLinkToken = React.useCallback(async () => {
		// For OAuth, use previously generated Link token
		if (window.location.href.includes("?oauth_state_id=")) {
			const linkToken = localStorage.getItem('link_token')
			setToken(linkToken)
		} else {
			const data = await getLink()

			setToken(data.link_token);
			localStorage.setItem("link_token", data.link_token)
		}
	}, [setToken])


	const onLinkSuccess = useCallback(async (publicToken: string) => {
		setLoading(true);
		// https://stackoverflow.com/a/58613959
		const response = await createAccount(publicToken)
		console.log('response.account.isCreationComplete', response.account.isCreationComplete)
		if (response.account.isCreationComplete) router.push('/transactions')
		else {
			setAccount(response.account)
			setRequiredInformation(requiredInformation)
			router.push('/transactions')
			// setIsModalOpen(true)
		}
	}, [])

	const config: PlaidLinkOptions = {
		token,
		onSuccess: onLinkSuccess,
	};

	let isOauth = false
	if (process.browser && window?.location.href.includes("?oauth_state_id=")) {
		config.receivedRedirectUri = window.location.href
		isOauth = true
	}

	const { open, ready } = usePlaidLink(config)

	useEffect(() => { createLinkToken() }, [])

	const openPlaidLink = () => {
		setLoading(true)
		open()
	}

	return (
		<div className="container">
			<NavBar />
			{isModalOpen ?
				<AdditionalInfoModal requiredInformation={{
					individual: {
						first_name: "John",
						last_name: "McDowel"
					},
					address: { line1: "Some addres info", line2: null, city: null, state: null, zip: null },
				}}
					account={account}
				/>
				:
				<>
					<h1>Connect your checking account</h1>
					<p>To start paying debt or saving money with Lever you will need to connect your checking account.</p>
					<Button isPreloader={!ready || isLoading} onClick={() => openPlaidLink()}>Connect My Checking Account</Button>
				</>
			}

		</div>
	)
}

export default ConnectCheckingAccountPage;