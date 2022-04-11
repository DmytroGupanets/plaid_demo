import { useRouter } from "next/router"
import React from "react"
import { useForm } from "react-hook-form"
import { loginConfirm, loginIntention } from "../api/api"
import Button from "../components/Button/Button"



const LoginPage = () => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    })

    const router = useRouter()

    const onSubmit = async ({ phone, password }) => {
        try {
            await loginIntention(phone)
            await loginConfirm({ phone, password })
            router.push('/main')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="container">
            <h1>Login to DevEnv</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="phone">
                    <div>
                        Enter your phone number
                    </div>
                    <input type="text" id="phone" name="phone" {...register('phone', { min: 0, required: true })} />
                </label>
                <p style={{ color: 'red' }}>{errors.amount && 'Enter correct phone'}</p>

                <label htmlFor="password">
                    <div>
                        Enter your password
                    </div>
                    <input type="text" id="password" name="password" {...register('password', { required: true })} />
                </label>
                <p style={{ color: 'red' }}>{errors.servicer_id && 'Enter loan id'}</p>

                <Button theme="fill" onClick={() => handleSubmit(onSubmit)}>Login</Button>
            </form>
        </div>
    )
}

export default LoginPage