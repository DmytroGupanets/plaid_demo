import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { createPaymentIntent, getLoanById } from "../api/api"
import Button from '../components/Button/Button'
import LoanCard from "../components/LoanCard/LoanCard"


export default function Home() {
  const [loan, setLoan] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
  })

  const router = useRouter()

  const getLoan = async () => {
    setLoading(true);
    const loanId = localStorage.getItem('loan_id')
    let loanData = null
    if (loanId) loanData = await getLoanById(loanId)
    setLoan(loanData)
    setLoading(false)
  }

  useEffect(() => {
    getLoan()
  }, [])


  const onSubmit = async ({ amount }) => {
    localStorage.setItem('amount', amount)
    const loanId = localStorage.getItem('loan_id')

    const amountInCents = Number(amount) * 100

    const payment = await createPaymentIntent(amountInCents, loanId)
    localStorage.setItem('paymentId', payment.id)
    router.push('/confirm_payment')

  }


  return (
    <div className={'container'}>
      <h1>Initiate payment</h1>
      {isLoading || !loan ?
        <p>Loading...</p>
        :
        <>
          <p>Choosen Loan:</p>
          <LoanCard loan={loan} onLoanClick={() => { }} />
        </>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="amount">
          <div>
            Enter your amount
          </div>
          <input type="text" id="amount" name="amount" {...register('amount', { min: 0, pattern: /^[0-9]+$/i, required: true })} />
        </label>
        <p style={{ color: 'red' }}>{errors.amount && 'Enter correct amount'}</p>


        <Button isPreloader={isLoading} theme="fill" onClick={() => handleSubmit(onSubmit)}>Make a payment</Button>
      </form>
    </div>
  )
}
