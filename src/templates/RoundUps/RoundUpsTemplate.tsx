import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import { getUserRoundUps, removeRoundUps, setIsActiveRoundUp } from '../../api/api'
import NavBar from '../../components/NavBar/NavBar'
import RoundUpCard from '../../components/RoundUpCard/RoundUpCard'
import { RoundUpsTemplateStyled } from './RoundUpsTemplateStyled'



const RoundUpsTemplate = () => {
    const router = useRouter()
    const [roundUps, setRoundUps] = useState([])

    const getRoundUps = async () => {
        const roundUpsData = await getUserRoundUps()
        console.log('roundUpsData :>> ', roundUpsData);
        setRoundUps(roundUpsData)
    }

    useEffect(() => {
        getRoundUps()
    }, [])

    const onDeleteRoundUp = async (roundUpId: string) => {
        const removedRoundUp = await removeRoundUps(roundUpId)
        const remainingRoundUps = roundUps.filter(RU => RU.id === removedRoundUp.id)
        setRoundUps(remainingRoundUps)
    }

    const onSwitchIsActive = async (roundUpId: string, isActive: boolean) => {
        const roundUp = await setIsActiveRoundUp(roundUpId, isActive)
        const updatedRoundUps = roundUps.map(RU => {
            if (RU.id === roundUp.id) {
                return roundUp
            }
        })

        setRoundUps(updatedRoundUps)
    }



    return <RoundUpsTemplateStyled>

        <NavBar />

        <h1>Round Ups</h1>

        {roundUps ?
            roundUps.map(roundUp => (<RoundUpCard key={roundUp.id} roundUp={roundUp} onDelete={onDeleteRoundUp} onChangeSwitchState={onSwitchIsActive} />))
            :
            <p>Loading...</p>
        }



        <button className='create_button' type='button' onClick={() => router.push('/round_ups/create')}>Create Round Up</button>



    </RoundUpsTemplateStyled>
}


export default RoundUpsTemplate