import React, { useState } from 'react'
import { createRecurringPayment } from '../../../api/api'
import { CreateRecurringPaymentStyled } from './CreateRecurringPaymentStyled'

import { useRouter } from 'next/router'
import NavBar from '../../../components/NavBar/NavBar'

const CreateRecurringPaymentTemplate = () => {
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [isShowWeekSelector, setIsShowWeekSelector] = useState(false)

    const router = useRouter()

    const onPeriodSelect = (e) => {
        if (e.target.value === 'DAILY') {
            setIsShowWeekSelector(false)
            setIsShowCalendar(false)
        } else if (e.target.value === 'WEEKLY') {
            setIsShowCalendar(false)
            setIsShowWeekSelector(true)
        } else if (e.target.value === 'MONTHLY') {
            setIsShowWeekSelector(false)
            setIsShowCalendar(true)
        }
    }

    const onHandleSubmit = async (e) => {

        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        const data = {
            accountId: formProps.account_id,
            amount: formProps.amount,
            payitoffLoanId: formProps.loan_id,
            frequency: {
                paymentsPeriod: formProps.period,
                dayOfTheWeek: formProps.weekday,
                date: formProps.date
            }
        }

        const newRecurringPayment = await createRecurringPayment(data)

        if (newRecurringPayment) {
            router.push('/recurring_payments')
        }
    }

    return <CreateRecurringPaymentStyled>

        <NavBar />

        <h1>Create recurring payments</h1>

        <form className='form_container' action="submit" onSubmit={onHandleSubmit}>
            <label className='form_label' htmlFor="account_id">
                Account ID to make payments from
                <input className='form_input' type="text" name="account_id" id="account_id" />
            </label>

            <label className='form_label' htmlFor="loan_id">
                Loan ID to make payments for
                <input className='form_input' type="text" name="loan_id" id="loan_id" />
            </label>

            <label className='form_label' htmlFor="amount">
                Amount
                <input className='form_input' type="number" name="amount" id="amount" />
            </label>

            <span className='form_label'>Select period for payments</span>
            <select className='form_select' id="ddlViewBy" name='period' onChange={onPeriodSelect}>
                <option className='form_option' value="DAILY">Daily</option>
                <option className='form_option' value="WEEKLY">Weekly</option>
                <option className='form_option' value="MONTHLY">Monthly</option>
            </select>

            {isShowCalendar &&
                <div className='form_time'>
                    <span className='form_label'> Date </span>
                    <input className='form_input' type="number" name="date" id="date" min='1' max='28' placeholder='1-28' />
                </div>
            }

            {isShowWeekSelector &&
                <div className='form_time'>
                    <span className='form_label'> Day of the week </span>
                    <select className='form_select' id="week" name='weekday' onChange={onPeriodSelect}>
                        <option className='form_option' value="SUNDAY">Sunday</option>
                        <option className='form_option' value="MONDAY">Monday</option>
                        <option className='form_option' value="TUESDAY">Tuesday</option>
                        <option className='form_option' value="WEDNESDAY">Wednesday</option>
                        <option className='form_option' value="THURSDAY">Thursday</option>
                        <option className='form_option' value="FRIDAY">Friday</option>
                        <option className='form_option' value="SATURDAY">Saturday</option>
                    </select>
                </div>
            }

            <button className='form_createBtn' type='submit'>Create</button>

        </form>


    </CreateRecurringPaymentStyled>
}

export default CreateRecurringPaymentTemplate