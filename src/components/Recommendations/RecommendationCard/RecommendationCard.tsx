import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import Button from '../../Button/Button'
import { RecommendationCardStyled } from './RecommendationCardStyled'

interface IProps {
    recommendation: any
    removeRecommendation: (recommendationdId: string) => void
}

const RecommendationCard = ({ recommendation, removeRecommendation }: IProps) => {

    const textArray: string[] = recommendation.message.split('#')

    const onClickDelete = (recommendationId: string) => { removeRecommendation(recommendationId) }

    return <RecommendationCardStyled>
        <div className='topContainer'>
            <ReactSwitch checked={!recommendation.isDismissed} onChange={() => { }} />
            <Button focus={true} theme='notFill_blue' style={{ padding: '2px 5px', minHeight: '15px' }} onClick={() => onClickDelete(recommendation.id)}>Delete</Button>
        </div>

        <div className='midContainer'>
            <h1 className='title'>{recommendation.action}</h1>
            {textArray[0].length > 0 ? (
                <p className='mainText'>
                    {textArray[0]}
                    <span className='accentText'>{recommendation.accent_text}</span>
                    {textArray[1]}
                </p>
            ) : (
                <p className='mainText' color="blue">
                    {textArray[1]}
                    <span className='accentText'>{textArray[1]}</span>
                </p>
            )}

            <div style={{ marginTop: '15px' }}>
                <p>Type: {recommendation.type}</p>
                <p>Slug: {recommendation.slug}</p>
                <p>Destination: {recommendation.destination}</p>
            </div>

        </div>
    </RecommendationCardStyled>
}


export default RecommendationCard