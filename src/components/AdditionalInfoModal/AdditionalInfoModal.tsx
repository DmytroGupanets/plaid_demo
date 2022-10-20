import React, { useState } from 'react'
import Notify from 'simple-notify'
import { confirmCreateAccount } from '../../api/api'
import { pushNotify } from '../../helpers/notification'
import { AdditionalInfoModalStyled } from './AdditionalInfoModalStyled'

interface IProps {
    requiredInformation: any
    account: any
}

const AdditionalInfoModal = ({ requiredInformation, account }: IProps) => {
    const [isDropdown, setIsDropdown] = useState(false)
    console.log('account :>> ', account);
    const openRoundUpHistory = () => {
        setIsDropdown(!isDropdown)
    }

    const onHandleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        const data = {
            accountId: account?.id ? account.id : null,
            first_name: formProps.first_name,
            last_name: formProps.last_name,
            address: {
                line1: formProps.line1,
                line2: formProps.line2 ? formProps.line2 : null,
                city: formProps.city,
                state: formProps.state,
                zip: formProps.zip
            }
        }

        const response = await confirmCreateAccount(data)
        if (typeof response?.message === 'string') {
            pushNotify('error', 'Error response', response.message)
        }
    }



    return <div className='container'>
        <AdditionalInfoModalStyled>
            <h1>Additional information required as your bank details is not enough</h1>
            <form className='form_container' action="submit" onSubmit={onHandleSubmit}>
                <label className='form_label' htmlFor="first_name">
                    First name:
                    <input className='form_input' value={requiredInformation.first_name} type="text" name="first_name" id="first_name" />
                </label>

                <label className='form_label' htmlFor="last_name">
                    Last name:
                    <input className='form_input' defaultValue={requiredInformation.last_name} type="text" name="last_name" id="last_name" />
                </label>

                <h2>Address</h2>

                <label className='form_label' htmlFor="line1">
                    Street Line 1:
                    <input className='form_input' type="text" name="line1" id="line1" />
                </label>

                <label className='form_label' htmlFor="line2">
                    Street Line 2:
                    <input className='form_input' type="text" name="line2" id="line2" />
                </label>

                <label className='form_label' htmlFor="city">
                    City:
                    <input className='form_input' type="text" name="city" id="city" />
                </label>

                <label className='form_label' htmlFor="state">
                    State:
                    <input className='form_input' type="text" name="state" id="state" />
                </label>

                <label className='form_label' htmlFor="zip">
                    ZIP-code:
                    <input className='form_input' type="number" name="zip" id="zip" />
                </label>

                <button className='form_createBtn' type='submit'>Confirm</button>

            </form>

        </AdditionalInfoModalStyled>
    </div>
}


export default AdditionalInfoModal