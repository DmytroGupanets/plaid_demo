import React from 'react'
import styles from './AccountCard.module.scss'

const AccountCard = ({ account, onLoanClick }) => {

    return <div className={styles.card} onClick={() => onLoanClick(account.id)}>
        <p className={styles.card__servicer}>{account?.name}</p>
        <p className={styles.card__description}>{account.officialName}</p>
        <p className={styles.card__interest}>Available balance: {(account.balances.available / 100)} {account.balances.iso_currency_code}</p>
        <p className={styles.card__principal}>Current balance: {(account.balances.current / 100)} {account.balances.iso_currency_code}</p>
    </div>

}


export default AccountCard