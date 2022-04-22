import React, { useState } from 'react'
import { CreateRecurringPaymentStyled } from './CreateRecurringPaymentStyled'


const CreateRecurringPaymentTemplate = () => {
    const [isShowTimeInput, setIsShowTimeInput] = useState(false)
    const [isShowCalendar, setIsShowCalendar] = useState(false)
    const [isShowWeekSelector, setIsShowWeekSelector] = useState(false)


    const onPeriodSelect = (e) => {
        if (e.target.value === 'DAILY') {
            setIsShowWeekSelector(false)
            setIsShowCalendar(false)
            setIsShowTimeInput(true)
        } else if (e.target.value === 'WEEKLY' || e.target.value === 'FORTNIGHTLY') {
            setIsShowTimeInput(false)
            setIsShowCalendar(false)
            setIsShowWeekSelector(true)
        } else if (e.target.value === 'MONTHLY') {
            setIsShowTimeInput(false)
            setIsShowWeekSelector(false)
            setIsShowCalendar(true)
        }
    }

    const onHandleSubmit = (e) => {

        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log('formProps :>> ', formProps);


    }

    return <CreateRecurringPaymentStyled>

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

            <label className='form_label' htmlFor="amount_id">
                Amount
                <input className='form_input' type="number" name="amount_id" id="amount_id" />
            </label>

            <span className='form_label'>Select period for payments</span>
            <select className='form_select' id="ddlViewBy" name='period' onChange={onPeriodSelect}>
                <option className='form_option' value="DAILY">Daily</option>
                <option className='form_option' value="WEEKLY">Weekly</option>
                <option className='form_option' value="FORTNIGHTLY">Fortnightly</option>
                <option className='form_option' value="MONTHLY">Monthly</option>
            </select>

            {isShowTimeInput &&
                <div className='form_time'>
                    <span className='form_label'>HH : MM</span>
                    <div>
                        <input className='form_hours' name='hours' id='hours' type='number' min='0' max='23' placeholder='12' />
                        <input className='form_minutes' name='minutes' id='minutes' type='number' min='0' max='59' placeholder='00' />
                    </div>
                </div>
            }

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