import { getPayments, getPaymentsByLoan, getPaymentsByRP, getPaymentsByRU } from './../api/api';
import { PaymentOptions } from "../pages/payments"

export const getPagesTotal = (total, limit) => {
    return Math.ceil(total / limit)
}

export const getPaymentRequest = async ({ option, loanId, roundUpId, recurringPaymentId, page, limit }) => {
    let data
    if (option === PaymentOptions.ALL) data = await getPayments(page, limit)

    if (option === PaymentOptions.BY_LOAN) data = await getPaymentsByLoan(loanId, page, limit)

    if (option === PaymentOptions.BY_ROUND_UP) data = await getPaymentsByRU(roundUpId, page, limit)

    if (option === PaymentOptions.BY_RECURRING_PAYMENT) data = await getPaymentsByRP(recurringPaymentId, page, limit)

    return data
}