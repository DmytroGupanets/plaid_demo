import { hasUncaughtExceptionCaptureCallback } from "process";
import { useEffect, useState } from "react";
import { getEntityApi, getLiabilitiesApi, requestQuestionsApi, sendKBAResponseApi } from "../api/api";
import LiabilitiesTP from "../templates/LiabilitiesTP";

const questionsData = {
    questions: [
        {
            id: "qtn_ywWqCnXDGGmmg",
            text: "What is the monthly payment of your most recent auto loan or lease?",
            answers: [
                {
                    id: "ans_qHLLEUBVpSpTK",
                    text: "$601 - $700"
                },
                {
                    id: "ans_b3xLiwTS8ygMy",
                    text: "$701 - $800"
                },
                {
                    id: "ans_Z5mMMLFy6waMK",
                    text: "$801 - $900"
                },
                {
                    id: "ans_BeSaN5Vj6tRjh",
                    text: "$901 - $1000"
                },
                {
                    id: "ans_74H68MJjqNhk8",
                    text: "None of the Above"
                }
            ]
        }
    ],
    authenticated: false
}


const LiabilitiesPage = () => {
    const [entity, setEntity] = useState(null)
    const [questions, setQuestions] = useState([])
    const [authenticated, setAuthenticated] = useState(false)
    const [liabilities, setLiabilities] = useState([])
    const [isLoading, setLoading] = useState(false)

    const getEntity = async () => {
        setLoading(true)
        const entity = await getEntityApi()
        setEntity(entity)
        setLoading(false)
    }

    const getLiabilities = async () => {
        setLoading(true)
        const liabilities = await getLiabilitiesApi()
        setLiabilities(liabilities)
        setLoading(false)
    }

    const requestQuestions = async () => {
        setLoading(true)
        const questionsData = await requestQuestionsApi()
        setQuestions(questionsData.questions)
        questionsData.authenticated && setAuthenticated(true)
        setLoading(false)
    }

    const sendKBAResponse = async (response) => {
        setLoading(true)
        const questionsData = await sendKBAResponseApi(response)
        setQuestions(questionsData.questions)
        questionsData.authenticated && setAuthenticated(true)
        setLoading(false)
    }

    useEffect(() => {
        getEntity()
        getLiabilities()
    }, [])

    return (
        <div className={'container'}>
            <LiabilitiesTP
                entity={entity}
                questions={questions}
                requestQuestions={requestQuestions}
                sendKBAResponse={sendKBAResponse}
                liabilities={liabilities} />
        </div >
    )
}

export default LiabilitiesPage