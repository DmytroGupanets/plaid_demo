import React from 'react'
import { QuestionStyled } from './QuestionStyled'


const Question = ({ question }) => {


    return <QuestionStyled>
        <p className='question'>{question.id}</p>
        <p className='question'>{question.text}</p>
        <ul>
            {question.answers.map(a => {
                return <div key={a.id}>
                    <p>ID: {a.id}</p>
                    <p>Answer: {a.text}</p>
                </div>
            })}
        </ul>
    </QuestionStyled>
}

export default Question