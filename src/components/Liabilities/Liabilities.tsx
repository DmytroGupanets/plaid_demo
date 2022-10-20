import React from 'react'
import { LiabilitiesStyled } from './LiabilitiesStyled'

const Liabilities = ({ liabilities }) => {

    return <LiabilitiesStyled>
        {liabilities && liabilities.map((l: any) => {
            return <div key={l.id}>
                <p>{JSON.stringify(l)}</p>
            </div>
        })}
    </LiabilitiesStyled>

}


export default Liabilities