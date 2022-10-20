import { format } from 'date-fns'
import React, { useState } from 'react'
import TransactionCard from '../../../TransactionCard/TransactionCard'
import { MonthlyTransactionsStyled } from './MonthlyTransactionsStyled'


const MonthlyTransactions = ({ month, monthlyData }) => {

    const [monthOfTransactionsIsOpen, setMonthOfTransactionsIsOpen] = useState([])
    const [isDropdownTransaction, setIsDropdownTransaction] = useState([])


    const onClickAddIsOpenMonthOfTransactions = (month: string) => {
        if (!monthOfTransactionsIsOpen.includes(month)) return setMonthOfTransactionsIsOpen(prev => [...prev, month])

        const monthOfTransactions = monthOfTransactionsIsOpen.filter(m => m !== month)
        setMonthOfTransactionsIsOpen(monthOfTransactions)
    }

    const onTransactionClickExpand = (transaction_id: string) => {
        if (!isDropdownTransaction.includes(transaction_id)) return setIsDropdownTransaction(prev => [...prev, transaction_id])

        const openedTransactions = isDropdownTransaction.filter(t => t !== transaction_id)
        setIsDropdownTransaction(openedTransactions)
    }

    return <MonthlyTransactionsStyled isOpen={monthOfTransactionsIsOpen.includes(month)}>
        <div className='monthContainer'>
            <div className='monthTop'>
                <span className='monthLabel'>{format(new Date(month), 'MMMM yyyy')}</span>
                <div className='iconWrapper' onClick={() => onClickAddIsOpenMonthOfTransactions(month)}>
                    <svg className='dropdownBtn' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#0544b9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            {monthOfTransactionsIsOpen.includes(month) && monthlyData.map(transaction => (
                <TransactionCard
                    key={transaction.transaction_id}
                    transaction={transaction}
                    onTransactionClickExpand={onTransactionClickExpand}
                    isDropdownTransaction={isDropdownTransaction}
                />))}
        </div>
    </MonthlyTransactionsStyled>

}


export default MonthlyTransactions