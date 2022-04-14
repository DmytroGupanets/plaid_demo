import React from 'react'
import styles from './LoanCard.module.scss'


const LoanCard = ({ loan, onLoanClick }) => {

    return <div className={styles.card} onClick={() => onLoanClick(loan.id)}>
        <div className={styles.card__logoWrapper}>
            <img className={styles.card__logo} src={loan.logo} alt="logo" />
        </div>
        <div className={styles.card__info}><p className={styles.card__servicer}>{loan?.servicer_name}</p>
            <p className={styles.card__description}>{loan.repayment_plan?.description}</p>
            <p className={styles.card__interest}>Outstanding interest: {loan.outstanding_interest}</p>
            <p className={styles.card__principal}>Outstanding principal: {loan.outstanding_principal}</p></div>

    </div>

}


export default LoanCard