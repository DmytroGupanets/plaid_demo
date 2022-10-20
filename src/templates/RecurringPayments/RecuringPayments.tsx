import { useRouter } from 'next/router'
import React from 'react'
import ReactSwitch from 'react-switch'
import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import RecurrringPaymentCard from '../../components/RecurringPaymentCard/RecurringPaymentCard'
import { RecuringPaymentsStyled } from './RecurringPaymentsStyled'


interface IProps {
    recurringPayments: any[],
    loading: boolean,
    enabledPayments: boolean,
    onSwitchClick: (value: boolean) => {},
    onCancelPayment: (paymentId: string) => {}
}

const RecurringPaymentsTemplate = ({ recurringPayments, loading, onCancelPayment, enabledPayments, onSwitchClick }: IProps) => {
    const router = useRouter()

    return <RecuringPaymentsStyled>
        <NavBar />
        <h1>Recurring payments </h1>
        <div className='switch_container'>
            <p className='switch_text'>You can enable or disable all recurring payments</p>
            <ReactSwitch checked={enabledPayments} onChange={(value) => onSwitchClick(value)} />
        </div>

        {loading && <p>Loading...</p>}

        {
            !loading && !!recurringPayments.length && recurringPayments.map(recurringPayment =>
                <RecurrringPaymentCard key={recurringPayment.id} recurringPayment={recurringPayment} onDelete={onCancelPayment} />)
        }

        <div className='buttonWrapper'>
            <Button theme="fill" onClick={() => router.push('/recurring_payments/create')}> Add Recurring Payment </Button>
            <Button theme="fill" onClick={() => router.push('/main')}> Back </Button>
        </div>


    </RecuringPaymentsStyled>
}

export default RecurringPaymentsTemplate