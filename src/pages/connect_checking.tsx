import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { usePlaidLink, PlaidLinkOptions } from "react-plaid-link";
import { createAccount, getLink } from "../api/api";
import Button from "../components/Button/Button";



const ConnectCheckingAccountPage = () => {
	const [token, setToken] = useState(null);
	const [isLoading, setLoading] = useState(false);
	const router = useRouter();


	const createLinkToken = React.useCallback(async () => {
		// For OAuth, use previously generated Link token
		if (window.location.href.includes("?oauth_state_id=")) {
			const linkToken = localStorage.getItem('link_token');
			setToken(linkToken);
		} else {
			const data = await getLink()

			setToken(data.link_token);
			localStorage.setItem("link_token", data.link_token);
		}
	}, [setToken]);


	const onLinkSuccess = useCallback(async (publicToken: string) => {
		setLoading(true);
		// https://stackoverflow.com/a/58613959
		await createAccount(publicToken)
		router.push('/accounts');
	}, []);

	const config: PlaidLinkOptions = {
		token,
		onSuccess: onLinkSuccess,
	};

	let isOauth = false;
	if (process.browser && window?.location.href.includes("?oauth_state_id=")) {
		config.receivedRedirectUri = window.location.href;
		isOauth = true;
	}

	const { open, ready } = usePlaidLink(config);

	useEffect(() => { createLinkToken() }, []);

	const openPlaidLink = () => {
		setLoading(true);
		open();
	}

	return (
		<div className="container">
			<h1>Connect your checking account</h1>
			<p>To start paying debt or saving money with Lever you will need to connect your checking account.</p>
			<Button isPreloader={!ready || isLoading} onClick={() => openPlaidLink()}>Connect My Checking Account</Button>
		</div>
	);
};

export default ConnectCheckingAccountPage;