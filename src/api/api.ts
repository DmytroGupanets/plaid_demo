import axios from "axios";

// axios.defaults.baseURL = '/api/'
// axios.defaults.baseURL = 'http://localhost:5502/'
axios.defaults.baseURL = 'https://api.dev.levermydebt.com/'


interface ILoginConfirm {
    phone: string
    password: string
}

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
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
    return data
}

export const getAllLoans = async () => {
    const { data } = await axios.get(`loan`)
    return data.loans
}

export const getLoanById = async (loanId: string) => {
    const { data } = await axios.get(`loan/${loanId}`)

    return data
}

export const getLink = async () => {
    const { data } = await axios.get(`account/checking_account/link`);
    return data.data
}

export const createPaymentIntent = async (amount: number, payitoffLoanId: string) => {
    const { data } = await axios.post('payment/intent', { amount, payitoffLoanId })
    return data.payment
}

export const getAccount = async () => {
    const { data } = await axios.get('account/checking_account')
    return data
}

export const createAccount = async (publicToken: string) => {
    const { data } = await axios.post("account/checking_account/confirm", {
        publicToken,
    });
    return data
}

export const getPaymentInfo = async (paymentId: string) => {
    const { data } = await axios.get(`payment/${paymentId}`)
    return data.payment
}