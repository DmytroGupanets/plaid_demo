import { useRouter } from 'next/router'
import React from 'react'
import EntityCard from '../../components/EntityInfoCard/EntityCard'
import KBAQuestions from '../../components/KBAQuestions/KBAQuestions'
import Liabilities from '../../components/Liabilities/Liabilities'
import NavBar from '../../components/NavBar/NavBar'
import { LiabilitiesTPStyled } from './LiabilitiesTPStyled'




const LiabilitiesTP = ({
    entity,
    questions,
    requestQuestions,
    sendKBAResponse,
    liabilities
}) => {

    return (
        <LiabilitiesTPStyled>
            <NavBar />
            <h1>Libilities</h1>

            {entity && <EntityCard entity={entity} />}

            {questions && <KBAQuestions questions={questions} requestQuestions={requestQuestions} sendKBAResponse={sendKBAResponse} />}

            {liabilities && <Liabilities liabilities={liabilities} />}

        </LiabilitiesTPStyled>)
}


export default LiabilitiesTP