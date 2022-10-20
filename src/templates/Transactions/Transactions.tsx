import React, { useEffect, useState } from 'react'
import ChooseCheckingAccount from '../../components/InfoGraphic/ChooseCheckingAccount/ChooseCheckingAccount'
import InfoGraphic from '../../components/InfoGraphic/InfoGraphic'
import OtherInfo from '../../components/InfoGraphic/OtherInfo/OtherInfo'
import TransactionsBlock from '../../components/InfoGraphic/TransactionsBlock/TransactionsBlock'
import NavBar from '../../components/NavBar/NavBar'
import { TransactionsStyled } from './TransactionsStyled'



const TransactionsTemplate = ({
    accounts,
    preffered,
    onAccountClick,
    onDeleteAccontClick,
    transactions,
    analyticsReport,
    isLoading
}) => {
    const [isOpenGraph, setIsOpenGraph] = useState(false)
    const [isOpenOtherInfo, setIsOpenOtherInfo] = useState(false)
    const [isOpenTransactionsList, setIsOpenTransactionsList] = useState(false)



    const onOpenGraphClick = () => {
        setIsOpenGraph(!isOpenGraph)
    }

    const onOpenOtherInfoClick = () => {
        setIsOpenOtherInfo(!isOpenOtherInfo)
    }

    const onOpenTransactionsListClick = () => {
        setIsOpenTransactionsList(!isOpenTransactionsList)
    }

    useEffect(() => {
        setIsOpenGraph(false)
        setIsOpenOtherInfo(false)
        setIsOpenTransactionsList(false)
    }, [isLoading])


    return <TransactionsStyled>

        <NavBar />

        <ChooseCheckingAccount
            accounts={accounts}
            preffered={preffered}
            onAccountClick={onAccountClick}
            onDeleteAccontClick={onDeleteAccontClick}
            isLoading={isLoading} />

        <InfoGraphic
            analyticsReport={analyticsReport}
            isOpenGraph={isOpenGraph}
            onOpenGraphClick={onOpenGraphClick}
            isLoading={isLoading} />

        <OtherInfo
            analyticsReport={analyticsReport}
            isOpenOtherInfo={isOpenOtherInfo}
            onOpenOtherInfoClick={onOpenOtherInfoClick}
            isLoading={isLoading} />

        {transactions && <TransactionsBlock
            transactions={transactions}
            isOpenTransactionsList={isOpenTransactionsList}
            setIsOpenTransactionsList={onOpenTransactionsListClick}
            isLoading={isLoading} />}

    </TransactionsStyled>
}


export default TransactionsTemplate