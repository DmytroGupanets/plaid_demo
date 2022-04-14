import React from 'react'
import styles from './AccountCard.module.scss'
import cx from 'classnames'
import Button from '../Button/Button'

const AccountCard = ({ account, onClick, preffered, onDelete }) => {

    const Logo = ({ data }) => <img className={styles.card__accountLogo} src={`data:image/png;base64,${data}`} alt="logo" />

    const data = account.plaidAccountLogo


    return <div className={cx(styles.card, { [styles.card__preffered]: preffered })} >
        <div className={styles.card__topContainer}>
            <Button focus={true} theme='notFill_blue' style={{ padding: '2px 5px', minHeight: '15px' }} onClick={() => onDelete(account.id)}>Delete</Button>
            {preffered && <p className={styles.card__logo}>PREFFERED</p>}
        </div>
        <div className={styles.card__contentContainer} onClick={() => onClick(account.id)}>
            <div>
                <Logo data={data} />
            </div>
            <div className={styles.card__content}>
                <p className={styles.card__servicer}>{account?.name}</p>
                <p className={styles.card__description}>{account.officialName}</p>
                <p className={styles.card__interest}>Available balance: {(account.balances.available / 100)} {account.balances.iso_currency_code}</p>
                <p className={styles.card__principal}>Current balance: {(account.balances.current / 100)} {account.balances.iso_currency_code}</p>
                <p className={styles.card__id}>ID: {account.id}</p>
            </div>

        </div>
    </div>

}


export default AccountCard