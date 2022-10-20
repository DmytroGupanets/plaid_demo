import React, { useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import { getAccountById, saveRoundUp } from '../../../api/api'
import AccountCard from '../../../components/AccountCard/AccountCard'
import Button from '../../../components/Button/Button'
import NavBar from '../../../components/NavBar/NavBar'
import { RoundUpsTemplateStyled } from './CreateRoundUpTplStyled'



const CreateRoundUpsTemplate = () => {
    const [account, setAccount] = useState(null)
    const [loan, setLoan] = useState('')
    const [percentageRU, setPercentageRU] = useState(0)
    const [transactionRU, setTransactionRU] = useState(0)
    const [isEnablePercentageRU, setIsEnablePercentageRU] = useState(false)
    const [isEnableTransactionRU, setIsEnableTransactionRU,] = useState(false)


    useEffect(() => {
        const prefferedAccountId = localStorage.getItem('preffered_account')
        async function fetchData() {
            const account = await getAccountById(prefferedAccountId)
            setAccount(account)
        }
        fetchData()
    }, [])

    const onLoanInputChange = (e) => {
        setLoan(e.target.value)
    }

    const onChangePercentageRU = (e) => {
        setPercentageRU(e.target.value)
    }

    const onChangeTransactionRU = (e) => {
        setTransactionRU(e.target.value)
    }

    const onSwitchPercentageRUClick = (value) => {
        setIsEnablePercentageRU(value)
    }

    const onSwitchTransactionRUClick = (value) => {
        setIsEnableTransactionRU(value)
    }

    const onSubmitChanges = async () => {
        const data = {
            accountId: account.id,
            payitoffLoanId: loan,
            roundUps: {
                percentageRU: {
                    isActive: isEnablePercentageRU,
                    percent: percentageRU
                },
                transactionRU: {
                    isActive: isEnableTransactionRU,
                    value: +transactionRU
                }
            }
        }


        const roundUp = await saveRoundUp(data)
        console.log('roundUp :>> ', roundUp);
    }


    return <RoundUpsTemplateStyled>

        <NavBar />

        <h1>Set Round ups</h1>

        <div className='section'>
            <h3 className='subtitle'>Payment Account</h3>
            {account ? <AccountCard account={account} onClick={() => { }} preffered={true} onDelete={() => { }} /> : <p>Loading...</p>}
        </div>

        <div className='section'>
            <h3 className='subtitle'>Destination Account</h3>
            <label className='form_label' htmlFor="account_id">
                Loan ID
                <input className='form_input' onChange={onLoanInputChange} type="text" name="account_id" id="account_id" value={loan} />
            </label>
        </div>

        <div className='section'>
            <h3>Activate Round Ups</h3>

            <div className='cardWrapper'>
                <p className='typeTitle'>Percentage from transaction</p>
                <div className='mainWrapper'>
                    <label className='form_label' htmlFor="account_id">
                        <input type="number" min={0} max={30} value={percentageRU} onChange={onChangePercentageRU} />
                    </label>
                    <ReactSwitch checked={isEnablePercentageRU} onChange={(value) => onSwitchPercentageRUClick(value)} />
                </div>
                <p style={{ fontWeight: 700 }}>{percentageRU}% per transaction</p>
                <p className='explanation'>For example, if you spend $100 and you set 1% from each transaction, $1 will go to this account.</p>
            </div>

            <div className='cardWrapper'>
                <p className='typeTitle'>Transaction Round Up</p>

                <div className='mainWrapper'>
                    <label className='form_label' htmlFor="account_id">
                        <input type="number" min={0} max={30} value={transactionRU} onChange={onChangeTransactionRU} />
                    </label>
                    <ReactSwitch checked={isEnableTransactionRU} onChange={(value) => onSwitchTransactionRUClick(value)} />
                </div>
                <p style={{ fontWeight: 700 }}>${transactionRU} per transaction round up</p>
                <p className='explanation'>For example, if you spend $47.50 and you set round up to $10, $2.50 will go to this account.</p>
            </div>

        </div>

        <div className='btnWrapper'>
            <button className='button' type='button' onClick={onSubmitChanges}>Save changes</button>
            <button className='button' type='button'>Clear all</button>
        </div>

    </RoundUpsTemplateStyled>
}


export default CreateRoundUpsTemplate