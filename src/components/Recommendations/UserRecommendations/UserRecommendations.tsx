import React, { useState } from 'react'
import Button from '../../Button/Button'

import RecommendationCard from '../RecommendationCard/RecommendationCard'
import { UserRecommendationsStyled } from './UserRecommendationsStyled'



const UserRecommendations = ({ recommendations, removeRecommendation }) => {

    const [isOpenUserRecommendations, setIsOpenUserRecommendations] = useState(false)

    const onClickOpenRecommendationTypes = () => {
        setIsOpenUserRecommendations(prev => !prev)
    }

    return <UserRecommendationsStyled>

        <div className='topContainer'>
            <h2 className='title'>User recommendations:</h2>
            <Button isPreloader={false} onClick={onClickOpenRecommendationTypes}>{isOpenUserRecommendations ? 'Close' : 'Open'}</Button>
        </div>

        {isOpenUserRecommendations && recommendations &&
            recommendations.map(recommendation => (<RecommendationCard key={recommendation.id} recommendation={recommendation} removeRecommendation={removeRecommendation} />))
        }
    </UserRecommendationsStyled>
}


export default UserRecommendations