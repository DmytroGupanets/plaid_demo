import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import { getUserRecommendations } from '../../api/api'
import NavBar from '../../components/NavBar/NavBar'
import RecommendationCard from '../../components/Recommendations/RecommendationCard/RecommendationCard'
import RecommendationTypesBlock from '../../components/Recommendations/RecommendationTypesBlock/RecommendationTypesBlock'
import UserRecommendations from '../../components/Recommendations/UserRecommendations/UserRecommendations'
import { RecommendationsTemplateStyled } from './RecommendationsTemplateStyled'



const RecommendationsTemplate = ({ recommedations, removeRecommendation }) => {


    return <RecommendationsTemplateStyled>

        <NavBar />

        <RecommendationTypesBlock />

        <UserRecommendations recommendations={recommedations} removeRecommendation={removeRecommendation} />

    </RecommendationsTemplateStyled>
}


export default RecommendationsTemplate