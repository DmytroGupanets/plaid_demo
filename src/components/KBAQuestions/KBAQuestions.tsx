import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { createNewEntityApi } from '../../api/api'
import Button from '../Button/Button'
import { KBAQuestionsStyled } from './KBAQuestionsStyled'
import Question from './Question/Question'

const KBAQuestions = ({ questions, requestQuestions, sendKBAResponse }) => {
    const [isChangeInfo, setIsChangeInfo] = useState(false)
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({})

    const onSubmit = async ({ response }) => {
        const data = JSON.parse(response)
        console.log('data :>> ', data)
        sendKBAResponse(data)
    }


    return <KBAQuestionsStyled>
        <div className='topContainer'>
            <h2>KBA Questions</h2>
            <Button focus={true} theme='notFill_blue' style={{ padding: '10px 15px', minHeight: '15px' }} onClick={() => requestQuestions()}>Get Questions</Button>
        </div>
        {!!questions.length && questions.map(q => {
            return <Question question={q} key={q.id} />
        })
        }
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <div className='box'>
                {/* <label className='label' htmlFor='email' >Response </label> */}
                <textarea className='input' id='response' name='response' placeholder='Response' {...register('response', { required: false })} />
            </div>
            <Button theme='fill' wideButton={true} onClick={() => handleSubmit(onSubmit)}>Send Response</Button>
        </form>
    </KBAQuestionsStyled>

}


export default KBAQuestions