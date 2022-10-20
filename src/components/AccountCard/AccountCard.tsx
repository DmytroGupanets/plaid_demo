import React from 'react'
import Button from '../Button/Button'
import { AccountCardStyled } from './AccountCardStyled'

const AccountCard = ({ account, onClick, preffered, onDelete }) => {

    const Logo = ({ data }) => <img className='card__accountLogo' src={`data:image/png;base64,${data}`} alt="logo" />

    const data = account.plaidAccountLogo


    return <AccountCardStyled>
        <div className='topContainer'>
            <Button focus={true} theme='notFill_blue' style={{ padding: '2px 5px', minHeight: '15px' }} onClick={() => onDelete(account.id)}>Delete</Button>
            {preffered && <p className='logo'>PREFFERED</p>}
        </div>
        <div className='contentContainer' onClick={() => onClick(account.id)}>
            <div>
                <Logo data={data} />
            </div>
            <div className='content'>
                <p className='servicer'>{account?.name}</p>
                <p className='description'>{account.officialName}</p>
                <p className='interest'>Available balance: {(account.balances.available / 100)} {account.balances.iso_currency_code}</p>
                <p className='principal'>Current balance: {(account.balances.current / 100)} {account.balances.iso_currency_code}</p>
                <p className='id'>ID: {account.id}</p>
            </div>

        </div>
    </AccountCardStyled>

}


export default AccountCard