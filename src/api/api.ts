import { userInfo } from 'os';
import axios from "axios";

// axios.defaults.baseURL = '/api/'
// axios.defaults.baseURL = 'http://localhost:5502/v1.3'
axios.defaults.baseURL = 'https://api.dev.levermydebt.com/v1.3'


interface ILoginConfirm {
    phone: string
    password: string
}

// ====================  AUTH
export const loginIntention = async (phone: string) => {
    try {
        const { data } = await axios.post(`auth/login/intention`, {
            phone
        })
        return data
    } catch (error) {
        console.log('error', error)
        return
    }
}

export const loginConfirm = async ({ phone, password }: ILoginConfirm) => {
    try {
        const { data } = await axios.post('auth/login/confirm', {
            phone, password
        })
        localStorage.setItem('user_token', data.token)
        localStorage.setItem('preffered_account', data.user.prefferedCheckingAccount)
        localStorage.setItem('isRecurringPaymentsEnabled', data.user.isRecurringPaymentsEnabled === true ? '1' : '0')
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
        return data
    } catch (error) {
        console.log('error', error)
        return
    }
}

// ====================  USER
export const getUserInfo = async () => {
    const { data } = await axios.get('user')
    return data.user
}

export const updateRecurringPaymentsStatus = async (value: boolean) => {
    const { data } = await axios.put('user/recurring_payments_status', {
        isRecurringPaymentsEnabled: value
    })
    return data.user.isRecurringPaymentsEnabled
}

// ====================  LOANS
export const getLink = async () => {
    const { data } = await axios.get(`account/checking_account/link`);
    return data.data
}

export const getAllLoans = async () => {
    await axios.post('loan/sync')
    const { data } = await axios.get(`loan`)
    return data.loans
}

export const getLoanById = async (loanId: string) => {
    const { data } = await axios.get(`loan/${loanId}`)
    return data
}

// ====================  PAYMENTS
export const createPaymentIntent = async (amount: number, payitoffLoanId: string) => {
    const { data } = await axios.post('payment/intent', { amount, payitoffLoanId })
    return data.payment
}

export const makePayment = async (paymentId: string, accountId: string) => {
    const { data } = await axios.post(`payment/${paymentId}/confirm`, { accountId })
    return data.payment
}

export const getPayments = async (page: number, limit: number) => {
    const { data } = await axios.get(`payment?page=${page}&limit=${limit}`)
    return data
}

export const getPaymentsByLoan = async (loanId: string, page: number, limit: number) => {
    const { data } = await axios.get(`payment/loan/${loanId}?page=${page}&limit=${limit}`)
    return data
}

export const getPaymentsByRU = async (roundUpId: string, page: number, limit: number) => {
    const { data } = await axios.get(`payment/round_up/${roundUpId}?page=${page}&limit=${limit}`)
    return data
}

export const getPaymentsByRP = async (recurringPaymentId: string, page: number, limit: number) => {
    const { data } = await axios.get(`payment/recurring_payment/${recurringPaymentId}?page=${page}&limit=${limit}`)
    return data
}

export const getPaymentInfo = async (paymentId: string) => {
    const { data } = await axios.get(`payment/${paymentId}`)
    console.log('data', data)
    return data
}

export const cancelPayment = async (paymentId: string) => {
    const { data } = await axios.delete(`payment/${paymentId}`)
    return data.payment
}

// ====================  RECURRING PAYMENTS
export const getRecurringPayments = async () => {
    const { data } = await axios.get('recurring_payment')
    return data
}

export const createRecurringPayment = async (paymentInfo) => {
    const { data } = await axios.post('recurring_payment/schedule', paymentInfo)
    return data
}

export const cancelRecurringPayment = async (paymentId) => {
    const { data } = await axios.delete(`recurring_payment/${paymentId}`)
    return data
}

// ====================  ACCOUNTS
export const getAccounts = async () => {
    try {
        const { data } = await axios.get('account/checking_account')
        return data.accounts
    } catch (error) {
        return error.message
    }
}

export const getAccountById = async (accountId: string) => {
    const { data } = await axios.get(`account/checking_account`)
    const account = data.accounts.find(acc => acc.id === accountId)
    return account
}

export const createAccount = async (publicToken: string) => {
    const { data } = await axios.post("account/checking_account/confirm", {
        publicToken,
    })
    return data
}

export const confirmCreateAccount = async (userInfo: any) => {
    const response = await axios.post("account/checking_account/additional_information", {
        ...userInfo
    }).then(response => response.data).catch(error => {
        return error.response.data
    })
    return response
}

export const deleteAccount = async (accountId: string) => {
    const { data } = await axios.delete(`account/${accountId}`)
    return data
}

export const setPrefferedAccount = async (accountId: string) => {
    const { data } = await axios.post('account/checking_account/preffered', { accountId })
    return data.prefferedCheckingAccount
}

// ====================  ROUND UPS
export const saveRoundUp = async (roundUp: any) => {
    const { data } = await axios.post('round_up', roundUp)
    return data.roundUp
}

export const getUserRoundUps = async () => {
    const { data } = await axios.get('round_up')
    return data.roundUps
}

export const removeRoundUps = async (roundUpId: string) => {
    const { data } = await axios.delete(`round_up/${roundUpId}`)
    return data.roundUp
}

export const setIsActiveRoundUp = async (roundUpId: string, isActive: boolean) => {
    const { data } = await axios.put(`round_up/${roundUpId}`, { isActive })
    return data.roundUp
}

// TRANSACTIONS
export const getTransactionsPrefferedAccount = async (accountId: string) => {
    const { data } = await axios.get(`transactions/${accountId}`)
    return { transactions: data.transactions, analyticsReport: data.transactionsAnalytics }
}

export const getIncomeOnlyTransactions = async (accountId: string) => {
    const { data } = await axios.get(`transactions/${accountId}/income`)
    return data.transactions
}

export const getBankIncomes = async (accountId: string) => {
    const { data } = await axios.get(`transactions/${accountId}/recurring`)
    return data.incomes
}

// RECOMMENDATIONS

export const getUserRecommendations = async () => {
    const { data } = await axios.get(`recommendation`)
    return data.recommendations
}

export const removeRecommendation = async (recommendationId) => {
    try {
        const { data } = await axios.delete(`recommendation/${recommendationId}`)
        return data.recommendation
    } catch (error) {
        console.log('error.message', error.message)
        return
    }
}


// LIABILITIES

export const getEntityApi = async () => {
    try {
        const { data } = await axios.get(`method/entity`)
        return data.entity
    } catch (error) {
        console.log('error.message', error.message)
        return
    }
}

export const getLiabilitiesApi = async () => {
    try {
        const { data } = await axios.get(`method/liabilities`)
        return data.liabilities
    } catch (error) {
        console.log('error.message', error.message)
        return
    }
}

export const createNewEntityApi = async (entityInfo: any) => {
    try {
        const { data } = await axios.post(`method/entity`, entityInfo)
        return data.entity
    } catch (error) {
        console.log('error.message', error.message)
        return
    }
}

export const requestQuestionsApi = async () => {
    try {
        const { data } = await axios.get(`method/auth_session/questions`)
        return data.questionsData
    } catch (error) {
        console.log('error.message', error.message)
        return
    }
}

export const sendKBAResponseApi = async (response: any[]) => {
    try {
        const { data } = await axios.post(`method/auth_session/answers`, { answers: response })
        return data.questionsData
    } catch (error) {
        console.log('error.message', error.message)
        return
    }
}