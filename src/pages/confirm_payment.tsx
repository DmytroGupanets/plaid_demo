import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../components/Button/Button";
import Link from 'next/link';
import { useRouter } from "next/router";
import { getAccount, getPaymentInfo } from "../api/api";



const ConfirmPaymentPage = () => {
	const [account, setAccount] = useState(null)
	const [isLoading, setLoading] = useState(false)
	const [payment, setPayment] = useState(null)

	const router = useRouter()

	const getUserAccount = async () => {
		setLoading(true);
		const account = await getAccount();
		setAccount(account);
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

	return (
		<div className="container">
			<h1>Confirm your payment</h1>
			{payment && <h3>Amount: <span>${payment.amount / 100}</span></h3>}
			<div className="accountCard" style={{ backgroundColor: '#212121' }}>
				<div className="accountCard__name">{account?.name}</div>
				<div className="accountCard__summary">
					<div>${account?.balances?.available}</div>
					<div>*** {account?.mask}</div>
				</div>
				<Link href={'/connect_checking'}>
					<a>
						Change account
					</a>
				</Link>
			</div>
			<p>We`ll charge you bank account when you press this fucking button</p>
			<Button isPreloader={isLoading} onClick={() => alert(1)}>Make a payment</Button>
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