import React, { useEffect, useState } from 'react'
import { cancelPayment, getPayments } from '../api/api'
import RecurringPaymentsTemplate from '../templates/RecurringPayments/RecuringPayments'


const RecurringPayments = () => {
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    const [enabledPayments, setEnabledPayments] = useState(false)

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

    const onEnablePaymentsClick = async () => {
        setLoading(true)
        console.log('enabledPayments', enabledPayments);
        setEnabledPayments(prev => !prev)
        setLoading(false)
    }


    return <RecurringPaymentsTemplate
        payments={payments}
        onCancelPayment={onCancelPayment}
        loading={loading}
        enabledPayments={enabledPayments}
        onSwitchClick={onEnablePaymentsClick}
    />
}



export default RecurringPayments