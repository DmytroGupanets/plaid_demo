import React from 'react'

import { TransactionsBlockStyled } from './TransactionsBlockStyled'
import MonthlyTransactions from './MonthlyTransactions/MonthlyTransactions'
import Button from '../../Button/Button'

const TransactionsBlock = ({ transactions, isOpenTransactionsList, setIsOpenTransactionsList, isLoading }) => {

    const monthlyData = transactions.reduce((monthly: {}, transaction) => {

        const date = new Date(transaction.date.slice(0, -3)).toISOString().split('T')[0]

        const monthlyRecordIdx = Object.keys(monthly).findIndex(dateString => dateString === date)

        if (monthlyRecordIdx === -1)
            monthly[date] = [transaction]
        else monthly[date] = [transaction, ...monthly[date]]

        return monthly
    }, [])



    return <TransactionsBlockStyled isLoading={isLoading}>
        <div className='headContainer'>
            <h2>Transactions list</h2>
            <Button isPreloader={isLoading} className='openCloseBtn' onClick={setIsOpenTransactionsList}>{isOpenTransactionsList ? 'Hide' : 'Open'}</Button>
        </div>

        {isOpenTransactionsList &&
            <div className='mainContainer'>
                {Object.keys(monthlyData).map(month => (<MonthlyTransactions key={month} month={month} monthlyData={monthlyData[month]} />))}
            </div>
        }
    </TransactionsBlockStyled>
}

export default TransactionsBlock