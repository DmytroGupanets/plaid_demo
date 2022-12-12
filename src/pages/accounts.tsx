import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { deleteAccount, getAccounts, setPrefferedAccount } from '../api/api'
import AccountCard from '../components/AccountCard/AccountCard'
import Button from '../components/Button/Button'
import NavBar from '../components/NavBar/NavBar'


const AccountsPage = () => {
    const [accounts, setAccounts] = useState([])
    const [loading, setLoading] = useState(false)
    const [preffered, setPreffered] = useState(null)

    const router = useRouter()

    const getUserAccounts = async () => {
        setLoading(true)
        const accounts = await getAccounts()
        setAccounts(accounts);
        setLoading(false)
    }

    useEffect(() => {
        getUserAccounts()
        const prefferedAccount = localStorage.getItem('preffered_account')
        if (prefferedAccount) {
            setPreffered(prefferedAccount)
        }
    }, [])

    const onAccountClick = async (accountId: string) => {
        let prefferedRes
        if (preffered === accountId) {
            prefferedRes = await setPrefferedAccount(null)
        } else {
            prefferedRes = await setPrefferedAccount(accountId)
        }
        setPreffered(prefferedRes)
        localStorage.setItem('preffered_account', prefferedRes)
    }

    const onDeleteClick = async (accountId) => {
        setLoading(true)
        await deleteAccount(accountId)
        getUserAccounts()
        setLoading(false)
    }


    console.log('accounts :>> ', accounts);
    return <div className="container">
        <NavBar />
        <h1>Accounts</h1>
        <p>You can choose your preffered account for payments</p>
        {loading && <p>Loading User`s accounts...</p>}
        {!!accounts.length && accounts.map(acc =>
            preffered === acc.id && <AccountCard key={acc.id} account={acc} onClick={onAccountClick} preffered={preffered === acc.id} onDelete={onDeleteClick} />
        )}
        {!!accounts.length && accounts.map(acc =>
            preffered !== acc.id && <AccountCard key={acc.id} account={acc} onClick={onAccountClick} preffered={preffered === acc.id} onDelete={onDeleteClick} />)}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button theme="fill" onClick={() => router.push('/connect_checking')}>Connect checking account</Button>
            <Button theme="fill" onClick={() => router.push('/main')}>Back</Button>
        </div>
    </div>
}


export default AccountsPage