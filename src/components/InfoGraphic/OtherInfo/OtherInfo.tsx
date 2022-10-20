import { format } from 'date-fns'
import React from 'react'
import Button from '../../Button/Button'
import { OtherInfoStyled } from './OtherInfoStyled'


const OtherInfo = ({ analyticsReport, isOpenOtherInfo, onOpenOtherInfoClick, isLoading }) => {


    return <OtherInfoStyled isLoading={isLoading}>
        <div className='topContainer'>
            <h2>Other information</h2>
            <Button onClick={onOpenOtherInfoClick} isPreloader={isLoading}>{isOpenOtherInfo ? 'Hide' : 'Open'}</Button>
        </div>
        {isOpenOtherInfo && <div className='mainContainer'>
            <h2 className='title'>Last 12 monthes average information:</h2>
            <ul className='list'>
                <li>
                    <p className='label'>Highest monthly income: <span className='value green'>+{analyticsReport.highestMonthlyIncome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Lowest monthly income: <span className='value green'>+{analyticsReport.lowestMonthlyIncome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Average monthly income: <span className='value green'>+{analyticsReport.averageMonthlyIncome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Highest monthly expenses: <span className='value red'>-{analyticsReport.highestMonthlyOutcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Lowest monthly expenses: <span className='value red'>-{analyticsReport.lowestMonthlyOutcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Average monthly expenses: <span className='value red'>-{analyticsReport.averageMonthlyOutcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Average first half of month expenses: <span className='value red'>-{analyticsReport.averageFirstHalfOfMonthOutcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Average second half of month expenses: <span className='value red'>-{analyticsReport.averageSecondHalfOfMonthOutcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Most favorable period: <span className='value'>{analyticsReport.greaterIncomeMonthes.slice(0).reverse().map((month, idx) => {
                        if (idx === analyticsReport.greaterIncomeMonthes.length - 1) {
                            return format(new Date(month), "MMMM yy")
                        }
                        return `${format(new Date(month), "MMMM yy")}, `
                    })}</span></p>
                </li>
            </ul>

            <h3 className='title'>Present month <span>({format(new Date(analyticsReport.presentMonth.date), "MMM yyyy")})</span> information: </h3>

            <ul className='list'>
                <li>
                    <p className='label'>Income: <span className='value green'>{analyticsReport.presentMonth.income / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Expenses: <span className='value red'>{analyticsReport.presentMonth.outcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Average: <span className='value'>{analyticsReport.presentMonth.balance / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>First half of the month income: <span className='value green'>{analyticsReport.presentMonth.halfs[0].income / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>First half of the month expenses: <span className='value red'>{analyticsReport.presentMonth.halfs[0].outcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>First half of the month average: <span className='value'>{analyticsReport.presentMonth.halfs[0].balance / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Second half of the month income: <span className='value green'>{analyticsReport.presentMonth.halfs[1].income / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Second half of the month expenses: <span className='value red'>{analyticsReport.presentMonth.halfs[1].outcome / 100} $</span></p>
                </li>
                <li>
                    <p className='label'>Second half of the month average: <span className='value'>{analyticsReport.presentMonth.halfs[1].balance / 100} $</span></p>
                </li>
            </ul>
        </div>}


    </OtherInfoStyled>
}

export default OtherInfo