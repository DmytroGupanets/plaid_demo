import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'
import { loginConfirm, loginIntention } from '../../api/api'
import Button from '../../components/Button/Button'
import { LoginTPStyled } from './LoginTPStyled'

const LoginTP = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({})

    const router = useRouter()

    const onSubmit = async ({ phone, password }) => {
        await loginIntention(phone)
        await loginConfirm({ phone, password })
        router.push('/main')
    }

    return <LoginTPStyled>

        <h1 className='title'>Login to LeverMyDebt</h1>

        <div className='formWrapper'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>

                <div className='box'>
                    <input className='input' type='text' id='phone' name='phone' placeholder=' ' {...register('phone', { min: 0, required: true })} />
                    <label htmlFor='phone' className='label'>Phone</label>
                </div>

                <div className='box'>
                    <input className='input' type='password' id='password' name='password' placeholder=' ' {...register('password', { required: true })} />
                    <label className='label' htmlFor='password' >Password</label>
                </div>

                <div className='buttonWrapper'>
                    <Button theme='fill' wideButton={true} onClick={() => handleSubmit(onSubmit)}>Login</Button>
                </div>
            </form>
        </div>

    </LoginTPStyled>
}

export default LoginTP