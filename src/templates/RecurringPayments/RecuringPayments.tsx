import { useRouter } from 'next/router'
import React from 'react'
import ReactSwitch from 'react-switch'
import Button from '../../components/Button/Button'
import PaymentCard from '../../components/PaymentCard/PaymentCard'
import { RecuringPaymentsStyled } from './RecurringPaymentsStyled'

interface IProps {
    payments: any[],
    loading: boolean,
    enabledPayments: boolean,
    onSwitchClick: () => {},
    onCancelPayment: () => {}
}

const RecurringPaymentsTemplate = ({ payments, loading, onCancelPayment, enabledPayments, onSwitchClick }) => {


    const router = useRouter()


    return <RecuringPaymentsStyled>
        <h1>Recurring payments </h1>
        <div className='switch_container'>
            <p className='switch_text'>You can enable or disable all recurring payments</p>
            <ReactSwitch checked={enabledPayments} onChange={() => onSwitchClick()} />
        </div>

        {loading && <p>Loading...</p>}

        {/* {
            !loading && !!payments.length && payments.map(payment =>
                <PaymentCard key={payment.id} payment={payment} onDelete={onCancelPayment} />)
        } */}

        <Button theme="fill" onClick={() => router.push('/recurring_payments/create')}> Add Recurring Payment </Button>

        <Button theme="fill" onClick={() => router.push('/main')}> Back </Button>

    </RecuringPaymentsStyled>
}

export default RecurringPaymentsTemplate