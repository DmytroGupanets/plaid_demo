import React from 'react'
import Button from '../Button/Button'
import styles from './PaymentCard.module.scss'
import cx from 'classnames'


const PaymentCard = ({ payment, onDelete }) => {

    return <div className={styles.card} >
        <div className={styles.card__topContainer}>
            <Button focus={true} theme='notFill_blue' style={{ padding: '2px 5px', minHeight: '15px', width: '80px' }} onClick={() => onDelete(payment.id)}>Cancel</Button>
            <p className={cx(styles.card__status, {
                [styles.card__status_blue]: payment.status === 'pending',
                [styles.card__status_red]: payment.status === 'canceled',
                [styles.card__status_green]: payment.status === 'processing',
            })}>{payment.status}</p>
        </div>
        <p className={styles.card__amount}>Amount: ${payment.amount / 100}</p>
        <p className={styles.card__id}>ID: {payment.id}</p>
        <p className={styles.card__methodId}>Method ID: {payment.methodPaymentId}</p>

    </div>

}


export default PaymentCard