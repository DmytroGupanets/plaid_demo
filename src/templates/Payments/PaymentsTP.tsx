import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import { getUserRecommendations } from '../../api/api'
import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import PaymentCard from '../../components/PaymentCard/PaymentCard'
import RecommendationCard from '../../components/Recommendations/RecommendationCard/RecommendationCard'
import RecommendationTypesBlock from '../../components/Recommendations/RecommendationTypesBlock/RecommendationTypesBlock'
import UserRecommendations from '../../components/Recommendations/UserRecommendations/UserRecommendations'
import { PaymentOptions } from '../../pages/payments'
import { PaymentsTPStyled } from './PaymentTPStyled'




const PaymentsTP = ({
    payments,
    getUserPayments,
    isLoading,
    onCancelPayment,
    loanId,
    onLoanIdInputChange,
    roundUpId,
    onRoundUpIdInputChange,
    recurringPaymentId,
    onRecurringPaymentIdInputChange,
    page,
    totalPages,
    onLoadMore
}) => {
    const router = useRouter()

    return (
        <PaymentsTPStyled>
            <NavBar />
            <h1>Payments</h1>
            <div className='payments_btnsSection'>
                <Button theme="fill" onClick={() => getUserPayments(PaymentOptions.ALL)}>All</Button>
                <div className='payments_btnWrapper'>
                    <Button theme="fill" onClick={() => getUserPayments(PaymentOptions.BY_LOAN)}>By Loan ID</Button>
                    <label className='form_label' htmlFor="loan_id">
                        Loan ID
                        <input className='form_input' onChange={onLoanIdInputChange} type="text" name="loan_id" id="loan_id" value={loanId} />
                    </label>
                </div>
                <div className='payments_btnWrapper'>
                    <Button theme="fill" onClick={() => getUserPayments(PaymentOptions.BY_ROUND_UP)}>By Round Up</Button>
                    <label className='form_label' htmlFor="round_up_id">
                        Round Up ID
                        <input className='form_input' onChange={onRoundUpIdInputChange} type="text" name="round_up_id" id="round_up_id" value={roundUpId} />
                    </label>
                </div>
                <div className='payments_btnWrapper'>
                    <Button theme="fill" onClick={() => getUserPayments(PaymentOptions.BY_RECURRING_PAYMENT)}>By Recurring Payment</Button>
                    <label className='form_label' htmlFor="recurring_payment_id">
                        Recurring Payment ID
                        <input className='form_input' onChange={onRecurringPaymentIdInputChange} type="text" name="recurring_payment_id" id="recurring_payment_id" value={recurringPaymentId} />
                    </label>
                </div>
            </div>

            {isLoading && <p>Loading...</p>}

            {
                !isLoading && !!payments?.length && payments.map(payment =>
                    <PaymentCard key={payment.id} payment={payment} onDelete={onCancelPayment} />)
            }
            <p>{page} of {totalPages} pages</p>
            <Button theme="fill" onClick={onLoadMore}>Load more</Button>
        </PaymentsTPStyled>)
}


export default PaymentsTP