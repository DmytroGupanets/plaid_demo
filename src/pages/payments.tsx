import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { cancelPayment, deleteAccount, getAccounts, getPayments, setPrefferedAccount } from '../api/api'
import AccountCard from '../components/AccountCard/AccountCard'
import Button from '../components/Button/Button'
import PaymentCard from '../components/PaymentCard/PaymentCard'


const PaymentsPage = () => {
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const getUserPayments = async () => {
        setLoading(true)
        const payments = await getPayments()
        setPayments(payments)
        console.log('payments :>> ', payments);
        setLoading(false)
    }

    useEffect(() => {
        getUserPayments()
    }, [])

    const onCancelPayment = async (paymentId) => {
        setLoading(true)
        await cancelPayment(paymentId)
        getUserPayments()
        setLoading(false)
    }


    return <div className="container">
        <h1>Payments</h1>

        {loading && <p>Loading...</p>}

        {!loading && !!payments.length && payments.map(payment =>
            <PaymentCard key={payment.id} payment={payment} onDelete={onCancelPayment} />)}

        <Button theme="fill" onClick={() => router.push('/main')}>Back</Button>

    </div>
}


export default PaymentsPage