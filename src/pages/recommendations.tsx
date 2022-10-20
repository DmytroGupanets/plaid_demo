import React, { useEffect, useState } from 'react'
import { getUserRecommendations, removeRecommendation } from '../api/api'
import RecommendationsTemplate from '../templates/Recommendations/RecommendationsTemplateStyledTemplate'


const RecommendationsPage = () => {


    const [recommedations, setRecommedations] = useState([])

    const getRecommendations = async () => {
        const recommendations = await getUserRecommendations()
        setRecommedations(recommendations)
    }

    const onClickDelete = async (recommendationId) => {
        await removeRecommendation(recommendationId)
        getRecommendations()
    }

    useEffect(() => {
        getRecommendations()
    }, [])



    return <RecommendationsTemplate recommedations={recommedations} removeRecommendation={onClickDelete} />
}


export default RecommendationsPage