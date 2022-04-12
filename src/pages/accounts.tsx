import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getAccounts } from '../api/api'
import AccountCard from '../components/AccountCard/AccountCard'
import Button from '../components/Button/Button'


const AccountsPage = () => {
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const prefferedAccount = localStorage.getItem('preffered_account')

    const getUserAccounts = async () => {
        setLoading(true)
        const accounts = await getAccounts()
        setAccounts(accounts);
        setLoading(false)
    }

    useEffect(() => {
        getUserAccounts()
    }, [])

    const onAccountClick = (accountId: string) => {
        //set preffered account for user
    }



    return <div className="container">
        <h1>Accounts</h1>
        <p>You can choose your preffered account for payments</p>
        {loading && <p>Loading User`s accounts...</p>}
        {!!accounts.length && accounts.map(acc =>
            prefferedAccount === acc.id && <AccountCard key={acc.id} account={acc} onClick={onAccountClick} preffered={prefferedAccount === acc.id} />
        )}
        {!!accounts.length && accounts.map(acc =>
            prefferedAccount !== acc.id && <AccountCard key={acc.id} account={acc} onClick={onAccountClick} preffered={prefferedAccount === acc.id} />)}
        <Button theme="fill" onClick={() => router.push('/connect_checking')}>Connect checking account</Button>
    </div>
}


export default AccountsPage