import { useRouter } from 'next/router'
import React, { useState } from 'react'
import AccountCard from '../../AccountCard/AccountCard'
import Button from '../../Button/Button'
import { ChooseCheckingAccountStyled } from './ChooseCheckingAccountStyled'

const ChooseCheckingAccount = ({ accounts, preffered, onAccountClick, onDeleteAccontClick, isLoading }) => {

    const router = useRouter()

    const [isOpenAccountManager, setIsOpenAccountManager] = useState(false)


    const onManageAccountsClick = () => {
        setIsOpenAccountManager(prev => !prev)
    }

    const setPrefferedOnAccountClick = (accountId: string) => {
        onAccountClick(accountId)
    }

    const onDeleteCheckingAccount = (accountId: string) => {
        onDeleteAccontClick(accountId)
    }

    const onConnectCheckingAccountClick = () => {
        router.push('/connect_checking')
    }


    return <ChooseCheckingAccountStyled isLoading={isLoading}>

        <div className='topContainer'>
            <h2 className='title'>Preffered checking account:</h2>
            <Button isPreloader={isLoading} className='openCloseBtn' theme='fill' onClick={onManageAccountsClick}>{isOpenAccountManager ? 'Close' : 'Manage accounts'}</Button>
        </div>

        {accounts.length && preffered ?
            <>
                <p className='subtitle'>Click on another account to set it to preffered and see it`s transactions information</p>
                {accounts.map((account) => {
                    let isAnyPreffered = false
                    if (account.id === preffered) {
                        isAnyPreffered = true
                        return <AccountCard
                            account={account}
                            onClick={setPrefferedOnAccountClick}
                            preffered={account.id === preffered}
                            onDelete={onDeleteCheckingAccount}
                        />
                    }
                })}
            </>
            :
            <p className='subtitle-warning'>You dont have any preffered account! Select preffered account or connect checking account!</p>
        }



        {isOpenAccountManager ?
            <>
                {accounts.map((account) => {
                    if (account.id !== preffered)
                        return <AccountCard
                            account={account}
                            onClick={setPrefferedOnAccountClick}
                            preffered={account.id === preffered}
                            onDelete={onDeleteCheckingAccount}
                        />
                })}

                <Button className='openCloseBtn' theme='fill' onClick={onConnectCheckingAccountClick}>Connect checking account</Button>
            </>
            :
            <></>
        }


    </ChooseCheckingAccountStyled>
}


export default ChooseCheckingAccount