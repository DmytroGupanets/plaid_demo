import React, { useEffect, useState } from 'react'
import { deleteAccount, getAccounts, getTransactionsPrefferedAccount, setPrefferedAccount } from '../api/api'
import TransactionsTemplate from '../templates/Transactions/Transactions'

interface IHalfs {
    income: number,
    outcome: number,
    balance: number
}

interface IMonthlyAnalytics {
    date: string,
    income: number,
    outcome: number,
    balance: number
    halfs: IHalfs[]
}

export interface IAnalyticsReport {
    monthlyAnalytics: IMonthlyAnalytics[]
    presentMonth: IMonthlyAnalytics
    highestMonthlyIncome: number
    lowestMonthlyIncome: number
    averageMonthlyIncome: number
    highestMonthlyOutcome: number,
    lowestMonthlyOutcome: number,
    averageMonthlyOutcome: number,
    averageFirstHalfOfMonthOutcome: number,
    averageSecondHalfOfMonthOutcome: number,
    greaterIncomeMonthes: string[]
}

const TransactionsPage = () => {
    const [accounts, setAccounts] = useState([])
    const [preffered, setPreffered] = useState(null)

    const [transactions, setTransactions] = useState([])
    const [analyticsReport, setAnalyticsReport] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const getAllTransactions = async (prefferedAccountId: string) => {
        setIsLoading(true)
        const { transactions, analyticsReport } = await getTransactionsPrefferedAccount(prefferedAccountId)
        setTransactions(transactions)
        setAnalyticsReport(analyticsReport)
        setIsLoading(false)
    }

    const getUserAccounts = async () => {
        setIsLoading(true)
        const accounts = await getAccounts()
        if (typeof accounts === 'string') {
            console.log('error :>> ', accounts)
            setIsLoading(false)
            return
        }

        setAccounts(accounts)

        const prefferedAccount = await localStorage.getItem('preffered_account')
        if (prefferedAccount === 'null') {
            setIsLoading(false)
            return
        }

        setPreffered(prefferedAccount)
        getAllTransactions(prefferedAccount)
    }

    useEffect(() => {
        getUserAccounts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preffered])

    const onAccountClick = async (accountId: string) => {
        let prefferedRes
        if (preffered === accountId) {
            prefferedRes = await setPrefferedAccount(null)
        } else {
            prefferedRes = await setPrefferedAccount(accountId)
        }
        setPreffered(prefferedRes)
        localStorage.setItem('preffered_account', prefferedRes)
    }


    const onDeleteAccontClick = async (accountId) => {
        setIsLoading(true)
        if (accountId === preffered) {
            await localStorage.setItem('preffered_account', null)
            setPreffered(null)
        }
        await deleteAccount(accountId)
        getUserAccounts()
        setIsLoading(false)
    }

    return <TransactionsTemplate
        accounts={accounts}
        preffered={preffered}
        onAccountClick={onAccountClick}
        onDeleteAccontClick={onDeleteAccontClick}
        transactions={transactions}
        analyticsReport={analyticsReport}
        isLoading={isLoading}
    />
}

export default TransactionsPage