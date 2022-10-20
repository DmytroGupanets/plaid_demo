import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactSwitch from 'react-switch'
import Button from '../Button/Button'
import { RoundUpCardStyled } from './RoundUpCardStyled'



interface IProps {
    roundUp: any
    onDelete: (roundUpId: string) => void
    onChangeSwitchState: (roundUpId: string, isActive: boolean) => void
}

const RoundUpCard = ({ roundUp, onDelete, onChangeSwitchState }: IProps) => {
    const [isDropdown, setIsDropdown] = useState(false)

    const openRoundUpHistory = () => {
        setIsDropdown(!isDropdown)
    }

    return <RoundUpCardStyled onClick={openRoundUpHistory}>
        <div className='topContainer'>
            <div className='iconNameWrapper'>
                {roundUp.accountLogo && <Image src={`data:image/jpeg;base64,${roundUp.accountLogo}`} alt='account logo' width={30} height={30} layout='raw' />}
                <span className='name'>{roundUp.accountName}</span>
            </div>
            <Button focus={true} theme='notFill_blue' style={{ padding: '2px 5px', minHeight: '15px', width: '80px', marginLeft: 'auto', marginRight: '10px' }} onClick={() => onDelete(roundUp.id)}>Cancel</Button>
            <ReactSwitch checked={roundUp.isActive} onChange={() => onChangeSwitchState(roundUp.id, !roundUp.isActive)} />
        </div>

        <div className='midContainer'>
            <div className='iconNameWrapper'>
                {roundUp.loanLogo && <Image src={roundUp.loanLogo} alt='loan logo' width={30} height={30} layout='raw' />}
                <span className='name'>{roundUp.loanServicerName}</span>
            </div>
            <p className='total'>Total: +${(roundUp.savingsTotal.percentageRU + roundUp.savingsTotal.transactionsRU) / 100}</p>
        </div>

        <p>Percentage from transaction: <span>+${roundUp.savingsTotal.percentageRU / 100}</span></p>
        <p>Transaction Round Up: <span>+${roundUp.savingsTotal.transactionsRU / 100}</span></p>

        {isDropdown &&
            <div className='historyDropDown'>
                {roundUp.chargesHistory.map((ru, i) => (
                    <p className='historyColumn' key={i}>
                        <span className='historyOption'>Type: {ru.type}</span>
                        <span className='historyOption'>Amount: +${ru.amount / 100}</span>
                        <span className='historyOption'>Date: {format(parseISO(ru.transactionDate), 'dd-MM-yyyy')}</span>
                    </p>)
                )}
            </div>
        }
    </RoundUpCardStyled>
}


export default RoundUpCard