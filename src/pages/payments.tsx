import React, { useEffect, useState } from 'react'
import { setOptions } from 'react-chartjs-2/dist/utils'
import { cancelPayment, getPayments, getPaymentsByLoan, getPaymentsByRU } from '../api/api'
import { getPagesTotal, getPaymentRequest } from '../helpers/utils'
import PaymentsTP from '../templates/Payments/PaymentsTP'

export enum PaymentOptions {
    ALL = 'ALL',
    BY_LOAN = 'BY_LOAN',
    BY_ROUND_UP = 'BY_ROUND_UP',
    BY_RECURRING_PAYMENT = 'BY_RECURRING_PAYMENT'
}



const PaymentsPage = () => {
    const [payments, setPayments] = useState([])
    const [loading, setLoading] = useState(false)
    const [loanId, setLoanId] = useState('')
    const [roundUpId, setRoundUpId] = useState('')
    const [recurringPaymentId, setRecurringPaymentId] = useState('')
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [option, setOption] = useState(PaymentOptions.ALL)

    const onLoanIdInputChange = (e) => {
        setLoanId(e.target.value)
    }

    const onRoundUpIdInputChange = (e) => {
        setRoundUpId(e.target.value)
    }

    const onRecurringPaymentIdInputChange = (e) => {
        setRecurringPaymentId(e.target.value)
    }

    const getUserPayments = async (option: PaymentOptions) => {
        setLoading(true)

        const data = await getPaymentRequest({
            option,
            loanId,
            roundUpId,
            recurringPaymentId,
            page,
            limit
        })

        setOption(option)
        setPayments(data.payments)
        setPage(1)
        setTotalPages(getPagesTotal(data.totalCount, limit))
        setLoading(false)
    }

    useEffect(() => {
        getUserPayments(PaymentOptions.ALL)
    }, [])

    const onLoadMore = async () => {
        setLoading(true)

        if (page + 1 > totalPages) return

        const data = await getPaymentRequest({
            option,
            loanId,
            roundUpId,
            recurringPaymentId,
            page: page + 1,
            limit
        })
        setPayments(prev => [...prev, ...data.payments])
        setPage(prev => prev + 1)
        setLoading(false)
    }

    return <PaymentsTP
        payments={payments}
        getUserPayments={getUserPayments}
        isLoading={loading}
        onCancelPayment={() => { }}
        loanId={loanId}
        onLoanIdInputChange={onLoanIdInputChange}
        roundUpId={roundUpId}
        onRoundUpIdInputChange={onRoundUpIdInputChange}
        recurringPaymentId={recurringPaymentId}
        onRecurringPaymentIdInputChange={onRecurringPaymentIdInputChange}
        page={page}
        totalPages={totalPages}
        onLoadMore={onLoadMore}
    />
}


export default PaymentsPage