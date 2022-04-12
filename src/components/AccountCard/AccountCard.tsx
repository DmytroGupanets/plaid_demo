import React from 'react'
import styles from './AccountCard.module.scss'
import cx from 'classnames'

const AccountCard = ({ account, onClick, preffered }) => {
    console.log('preffered :>> ', preffered);
    return <div className={cx(styles.card, { [styles.card__preffered]: preffered })} onClick={() => onClick(account.id)}>
        {preffered && <p className={styles.card__logo}>PREFFERED</p>}
        <p className={styles.card__servicer}>{account?.name}</p>
        <p className={styles.card__description}>{account.officialName}</p>
        <p className={styles.card__interest}>Available balance: {(account.balances.available / 100)} {account.balances.iso_currency_code}</p>
        <p className={styles.card__principal}>Current balance: {(account.balances.current / 100)} {account.balances.iso_currency_code}</p>
        <p className={styles.card__id}>ID: {account.id}</p>
    </div>

}


export default AccountCard