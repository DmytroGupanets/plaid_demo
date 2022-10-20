import React, { useEffect, useState } from 'react'
import { cancelPayment, cancelRecurringPayment, getRecurringPayments, updateRecurringPaymentsStatus } from '../api/api'
import RecurringPaymentsTemplate from '../templates/RecurringPayments/RecuringPayments'


const RecurringPayments = () => {
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    const [enabledPayments, setEnabledPayments] = useState(false)

    const getUserPayments = async () => {
        setLoading(true)
        const payments = await getRecurringPayments()
        localStorage.setItem('isRecurringPaymentsEnabled', payments.isRecurringPaymentsEnabled ? '1' : '0')
        setEnabledPayments(payments.isRecurringPaymentsEnabled)
        setPayments(payments.recurringPayments)
        setLoading(false)
    }

    useEffect(() => {
        getUserPayments()
        const isRecurringPaymentsEnabled = Boolean(+localStorage.getItem('isRecurringPaymentsEnabled'))
        setEnabledPayments(isRecurringPaymentsEnabled)
    }, [])

    const onCancelPayment = async (paymentId) => {
        setLoading(true)
        await cancelRecurringPayment(paymentId)
        getUserPayments()
        setLoading(false)
    }

    const onEnablePaymentsClick = async (value) => {
        setLoading(true)
        const paymentsStatus = await updateRecurringPaymentsStatus(value)
        setEnabledPayments(paymentsStatus)
        localStorage.setItem('isRecurringPaymentsEnabled', paymentsStatus === true ? '1' : '0')
        setLoading(false)
    }

    return <RecurringPaymentsTemplate
        recurringPayments={payments}
        onCancelPayment={onCancelPayment}
        loading={loading}
        enabledPayments={enabledPayments}
        onSwitchClick={onEnablePaymentsClick}
    />
}



export default RecurringPayments