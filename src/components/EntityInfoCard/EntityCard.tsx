import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createNewEntityApi } from '../../api/api'
import Button from '../Button/Button'
import { EntityCardStyled } from './EntityCardStyled'

const EntityCard = ({ entity }) => {
    const [isChangeInfo, setIsChangeInfo] = useState(false)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({})

    const onSubmit = async ({ firstName, lastName, phone, email, dob, line1, line2, city, state, zip }) => {
        const data = {
            firstName,
            lastName,
            phone,
            email: email ? email : undefined,
            dob: dob ? dob : undefined,
            address: line1 ? {
                line1: line1 ? line1 : undefined,
                line2: line2 ? line2 : undefined,
                city: city ? city : undefined,
                state: state ? state : undefined,
                zip: zip ? zip : undefined
            } : undefined
        }
        console.log('data :>> ', data);
        await createNewEntityApi(data)
    }

    const {
        individual: { first_name, last_name, phone, dob, email },
        address,
        status,
        capabilities,
        available_capabilities,
        pending_capabilities
    } = entity

    return <EntityCardStyled>
        <div className='topContainer'>
            <h2>Entity Information</h2>
            <Button focus={true} theme='notFill_blue' style={{ padding: '10px 15px', minHeight: '15px' }} onClick={() => { setIsChangeInfo(prev => !prev) }}>Change Info</Button>
        </div>
        {!isChangeInfo ? <div className='contentContainer'>
            <div>
                <p><span className='labelInfo'>Status: </span>{status}</p>
                <p><span className='labelInfo'>First Name: </span>{first_name}</p>
                <p><span className='labelInfo'>Last Name: </span>{last_name}</p>
                <p><span className='labelInfo'>Phone: </span>{phone}</p>
                <p><span className='labelInfo'>DOB: </span>{dob}</p>
                <p><span className='labelInfo'>E-mail: </span>{email}</p>
            </div>
            <div className='content'>
                <p><span className='labelInfo'>Address: </span></p>

                {address && <div className='addressContainer'>
                    <p><span className='labelInfo'>Line1: </span>{address.line1}</p>
                    <p><span className='labelInfo'>Line2: </span>{address.line2}</p>
                    <p><span className='labelInfo'>City: </span>{address.city}</p>
                    <p><span className='labelInfo'>State: </span>{address.state}</p>
                    <p><span className='labelInfo'>Zip: </span>{address.zip}</p>
                </div>}
            </div>
            <div className='content'>
                <p><span className='labelInfo'>Capabilities Info: </span></p>

                {address && <div className='addressContainer'>
                    <p><span className='labelInfo'>Capabilities: </span>{capabilities.map((c, i) => {
                        return <p key={`${i + 1}. ${c}`}>{`${i + 1}. ${c}`}</p>
                    })}</p>
                    <p><span className='labelInfo'>Available Capabilities: </span>{available_capabilities.map((c, i) => {
                        return <p key={`${i + 1}. ${c}`}>{`${i + 1}. ${c}`}</p>
                    })}</p>
                    <p><span className='labelInfo'>Pending Capabilities: </span>{pending_capabilities.map((c, i) => {
                        return <p key={`${i + 1}. ${c}`}>{`${i + 1}. ${c}`}</p>
                    })}</p>
                </div>}
            </div>
        </div> :

            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <div className='box'>
                    <input className='input' type='text' id='firstName' name='firstName' placeholder=' ' {...register('firstName', { min: 0, required: true })} />
                    <label htmlFor='firstName' className='label'>First Name</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='lastName' name='lastName' placeholder=' ' {...register('lastName', { required: true })} />
                    <label className='label' htmlFor='lastName' >Last Name</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='phone' name='phone' placeholder=' ' {...register('phone', { required: true })} />
                    <label className='label' htmlFor='phone' >Phone </label>
                </div>


                <div className='box'>
                    <input className='input' type='text' id='dob' name='dob' placeholder=' ' {...register('dob', { required: false })} />
                    <label className='label' htmlFor='dob' >DOB</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='email' name='email' placeholder=' ' {...register('email', { required: false })} />
                    <label className='label' htmlFor='email' >E-mail</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='line1' name='line1' placeholder=' ' {...register('line1', { required: false })} />
                    <label className='label' htmlFor='line1' >Line1</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='line2' name='line2' placeholder=' ' {...register('line2', { required: false })} />
                    <label className='label' htmlFor='line2' >Line2</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='city' name='city' placeholder=' ' {...register('city', { required: false })} />
                    <label className='label' htmlFor='city' >City</label>
                </div>

                <div className='box'>
                    <input className='input' type='text' id='state' name='state' placeholder=' ' {...register('state', { required: false })} />
                    <label className='label' htmlFor='state' >State</label>
                </div>

                <div className='box'>
                    <input className='input' type='number' id='zip' name='zip' placeholder=' ' {...register('zip', { required: false })} />
                    <label className='label' htmlFor='zip' >Zip</label>
                </div>

                <div className='buttonWrapper'>
                    <Button theme='fill' wideButton={true} onClick={() => handleSubmit(onSubmit)}>Create New Entity</Button>
                </div>
            </form>
        }
    </EntityCardStyled>

}


export default EntityCard