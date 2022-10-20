import React, { useState } from 'react'
import Button from '../../Button/Button'
import { RecommendationTypesBlockStyled } from './RecommendationTypesBlockStyled'
import RecTypeCard from './RecTypeCard/RecTypeCard'
import { recommendationData } from '../../../helpers/RecommendationsData'



const RecommendationTypesBlock = () => {
    const [isOpenRecommendationTypes, setIsOpenRecommendationTypes] = useState(false)

    const onClickOpenRecommendationTypes = () => {
        setIsOpenRecommendationTypes(prev => !prev)
    }

    return <RecommendationTypesBlockStyled>
        <div className='topContainer'>
            <h2 className='title'>Recommendation types:</h2>
            <Button isPreloader={false} className='openCloseBtn' theme='fill' onClick={onClickOpenRecommendationTypes}>{isOpenRecommendationTypes ? 'Close' : 'Open'}</Button>
        </div>

        {isOpenRecommendationTypes && recommendationData.map((rec, i) => {
            return <RecTypeCard key={`rec_card${i}`} recType={rec} />
        })}

    </RecommendationTypesBlockStyled>
}

export default RecommendationTypesBlock