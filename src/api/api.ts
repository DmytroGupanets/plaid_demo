import axios from "axios";

// axios.defaults.baseURL = '/api/'
// axios.defaults.baseURL = 'http://localhost:5502/'
axios.defaults.baseURL = 'https://api.dev.levermydebt.com/'


interface ILoginConfirm {
    phone: string
    password: string
}

// ====================  AUTH
export const loginIntention = async (phone: string) => {
    const { data } = await axios.post(`auth/login/intention`, {
        phone
    })
    return data
}

export const loginConfirm = async ({ phone, password }: ILoginConfirm) => {
    const { data } = await axios.post('auth/login/confirm', {
        phone, password
    })
    localStorage.setItem('user_token', data.token)
    localStorage.setItem('preffered_account', data.user.prefferedCheckingAccount)
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    return data
}

// ====================  USER
export const getUserInfo = async () => {
    const { data } = await axios.get('user')
    return data.user
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

export const makePayment = async (paymentId: string) => {
    const { data } = await axios.post(`payment/${paymentId}/confirm`)
    return data.payment
}

export const getPayments = async () => {
    const { data } = await axios.get('payment')
    return data.payments
}

export const getPaymentInfo = async (paymentId: string) => {
    const { data } = await axios.get(`payment/${paymentId}`)
    return data.payment
}

export const cancelPayment = async (paymentId: string) => {
    const { data } = await axios.delete(`payment/${paymentId}`)
    return data.payment
}

// ====================  ACCOUNTS
export const getAccounts = async () => {
    const { data } = await axios.get('account/checking_account')
    return data.accounts
}

export const getAccountById = async (accountId: string) => {
    const { data } = await axios.get(`account/checking_account`)
    const account = data.accounts.find(acc => acc.id === accountId)
    return account
}

export const createAccount = async (publicToken: string) => {
    const { data } = await axios.post("account/checking_account/confirm", {
        publicToken,
    });
    return data
}

export const deleteAccount = async (accountId: string) => {
    const { data } = await axios.delete(`account/${accountId}`)
    return data
}

export const setPrefferedAccount = async (accountId: string) => {
    const { data } = await axios.post('account/checking_account/preffered', { accountId })
    return data.prefferedCheckingAccount
}