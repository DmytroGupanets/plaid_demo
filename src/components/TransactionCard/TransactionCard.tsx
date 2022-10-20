import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import Button from '../Button/Button'
import { TransactionCardStyled } from './TransactionCardStyled'



interface IProps {
    transaction: any,
    isDropdownTransaction: string[],
    onTransactionClickExpand: (id: string) => void
}

const TransactionCard = ({ transaction, isDropdownTransaction, onTransactionClickExpand }: IProps) => {

    const objectEntries = Object.entries(transaction)

    const isIncome = transaction.amount < 0

    return <TransactionCardStyled isIncome={isIncome} onClick={() => onTransactionClickExpand(transaction.transaction_id)} >
        {!isDropdownTransaction.includes(transaction.transaction_id) ?
            <div className='cardHeader' >
                <p>Transaction name: {transaction.name}</p>
                <p className='row'><span>Amount: ${transaction.amount}</span><span>Date: {transaction.date}</span></p>
            </div>
            :
            <>
                <div className='cardHeader'>
                    <p>Transaction name: {transaction.name}</p>
                    <p>Amount: ${transaction.amount}</p>
                </div>
                <div className='historyDropDown'>

                    {objectEntries.map((el: any, i: number) => {
                        if (typeof (el[1]) === 'object') {
                            return <p className='line' key={i}>{el[0]}: <span className='value'>{JSON.stringify(el[1])}</span></p>
                        }
                        return <p className='line' key={i}>{el[0]}: <span className='value'>{el[1]}</span></p>
                    })}
                </div>
            </>

        }
    </TransactionCardStyled>
}


export default TransactionCard