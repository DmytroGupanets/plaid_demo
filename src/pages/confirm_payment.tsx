import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button/Button";
import Link from 'next/link';
import { useRouter } from "next/router";
import { getAccount, getPaymentInfo, makePayment } from "../api/api";
import AccountCard from "../components/AccountCard/AccountCard";



const ConfirmPaymentPage = () => {
	const [account, setAccount] = useState(null)
	const [isLoading, setLoading] = useState(false)
	const [payment, setPayment] = useState(null)

	const router = useRouter()

	const getUserAccount = async () => {
		setLoading(true);
		const account = await getAccount();
		console.log('account :>> ', account.data);
		setAccount(account.data);
		setLoading(false);
	}

	const getPayment = async () => {
		setLoading(true);
		const paymentId = localStorage.getItem('paymentId')

		if (!paymentId) router.push('initiate_payment')
		const payment = await getPaymentInfo(paymentId);
		setPayment(payment);
		setLoading(false);
	}

	useEffect(() => {
		getPayment()
		getUserAccount()
	}, []);

	const onHandlePaymentClick = async () => {
		setLoading(true)
		const paymentId = localStorage.getItem('paymentId')
		const confirmedPayment = await makePayment(paymentId)
		console.log('payment :>> ', confirmedPayment);
		setLoading(false)
	}

	return (
		<div className="container">
			<h1>Confirm your payment</h1>
			{payment && <h3>Amount: <span>${payment.amount / 100}</span></h3>}
			{account ? <AccountCard account={account} onLoanClick={() => { }} /> : <p style={{ fontWeight: 'bold', opacity: 0.7 }}>Loading checking account data...</p>}
			<p>We`ll charge you bank account when you press this fucking button</p>
			<Button isPreloader={isLoading} onClick={onHandlePaymentClick}>Make a payment</Button>
			<br />
			<Link href={'/'}>
				<a>
					Return home
				</a>
			</Link>
		</div>
	);
};

export default ConfirmPaymentPage;