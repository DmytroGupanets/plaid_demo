import React, { useState } from 'react'
import { RecTypeCardStyled } from './RecTypeCardStyles'


const RecTypeCard = ({ recType }) => {

    const {
        trigger,
        frequency,
        generalDescription,
        otherInfo: {
            type,
            slug,
            destination,
            amount,
            action,
            message,
            accent_text,
            explanation
        }
    } = recType

    const [expandRecType, setExpandRecType] = useState(false)

    const onIconClickExpand = () => {
        setExpandRecType(prev => !prev)
    }

    return <RecTypeCardStyled expandRecType={expandRecType}>
        <div className='topWrapper'>
            <p className='label'>Trigger: <span className='value'>{trigger}</span></p>
            <p className='label'>Frequency: <span className='value'>{frequency}</span></p>
            <p className='label'>Description: <span className='value'>{generalDescription}</span></p>
            {!expandRecType &&
                <div className='iconRaw'>
                    <div className='iconWrapper' onClick={onIconClickExpand}>
                        <svg className='dropdownBtn' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#0544b9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>}
        </div>

        {expandRecType && <div className='otherInfoWrapper'>
            <p className='label'>Type: <span className='value'>{type}</span></p>
            <p className='label'>Slug: <span className='value'>{slug}</span></p>
            <p className='label'>Destination: <span className='value'>{destination}</span></p>
            <p className='label'>Amount: <span className='value'>{amount ? amount : 'N/A'}</span></p>
            <p className='label'>Action: <span className='value'>{action}</span></p>
            <p className='label'>Message: <span className='value'>{message}</span></p>
            <p className='label'>Accent text: <span className='value'>{accent_text}</span></p>
            <p className='label'>Explanation: <span className='value'>{JSON.stringify(explanation)}</span></p>
            {expandRecType && <div className='iconRaw'>
                <div className='iconWrapper' onClick={onIconClickExpand}>
                    <svg className='dropdownBtn' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#0544b9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>}
        </div>}
    </RecTypeCardStyled>
}

export default RecTypeCard