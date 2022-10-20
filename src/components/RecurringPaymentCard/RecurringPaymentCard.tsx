import { format } from 'date-fns'
import React from 'react'
import Button from '../Button/Button'
import { RecuringPaymentCardStyled } from './RecurringPaymentCardStyled'


interface IProps {
    recurringPayment: any
    onDelete: (paymentId: string) => {}
}

const RecurrringPaymentCard = ({ recurringPayment, onDelete }: IProps) => {
    function convertTZus(date) {
        const tz = 'America/Chicago'
        return new Date((typeof date === "string" ? new Date(date) : date)?.toLocaleString("en-US", { timeZone: tz }));
    }

    function convertTZua(date) {
        const tz = 'Europe/Kiev'
        return new Date((typeof date === "string" ? new Date(date) : date)?.toLocaleString("en-US", { timeZone: tz }));
    }
    const nextPaymentDate = recurringPayment.nextPaymentDate ? format(convertTZus(recurringPayment.nextPaymentDate), 'dd-MM-yyyy HH:mm') : '-'
    const nextPaymentDateUA = recurringPayment.nextPaymentDate ? format(convertTZua(recurringPayment.nextPaymentDate), 'dd-MM-yyyy HH:mm') : '-'

    const lastPaymentDate = recurringPayment.lastPaymentDate ? format(convertTZus(recurringPayment.lastPaymentDate), 'dd-MM-yyyy HH:mm') : '-'
    const lastPaymentDateUA = recurringPayment.lastPaymentDate ? format(convertTZua(recurringPayment.lastPaymentDate), 'dd-MM-yyyy HH:mm') : '-'


    return <RecuringPaymentCardStyled>
        <div className='topContainer'>
            <Button focus={true} theme='notFill_blue' style={{ padding: '2px 5px', minHeight: '15px', width: '80px' }} onClick={() => onDelete(recurringPayment.id)}>Cancel</Button>
            <p className='paymentId'>ID: {recurringPayment.id}</p>
        </div>
        <p className='amount'>Amount: ${recurringPayment.amount / 100}</p>
        {recurringPayment.frequency?.time && <p className='frequency'>Frequency: {recurringPayment.frequency?.paymentsPeriod} - at {recurringPayment.frequency?.time}</p>}
        {recurringPayment.frequency?.dayOfTheWeek && <p className='frequency'>Frequency: {recurringPayment.frequency?.paymentsPeriod} - on every {recurringPayment.frequency?.dayOfTheWeek}</p>}
        {recurringPayment.frequency?.date && <p className='frequency'>Frequency: {recurringPayment.frequency?.paymentsPeriod} - on every {recurringPayment.frequency?.date}th</p>}
        <p className='status'>Status: {recurringPayment.status}</p>
        <p className='loanId'>LoanID: {recurringPayment.payitoffLoanId}</p>
        {nextPaymentDate && <p>Next payment(US): <span>{nextPaymentDate}</span></p>}
        {nextPaymentDateUA && <p>Next payment(UA): <span>{nextPaymentDateUA}</span></p>}

        {lastPaymentDate && <p>Last payment(US): <span>{lastPaymentDate}</span></p>}
        {lastPaymentDateUA && <p>Last payment(UA): <span>{lastPaymentDateUA}</span></p>}


        {recurringPayment.errorMessage && <p style={{ color: 'red' }}>{recurringPayment.errorMessage}</p>}

    </RecuringPaymentCardStyled>
}


export default RecurrringPaymentCard