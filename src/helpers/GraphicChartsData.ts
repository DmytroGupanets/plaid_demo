import { format } from 'date-fns';
import { IAnalyticsReport } from './../pages/transactions';


export const getLineGraphicData = (analyticsReport: IAnalyticsReport) => {

    const reversedMonthlyAnalytics = [...analyticsReport.monthlyAnalytics].reverse()

    const dates = reversedMonthlyAnalytics.map(month => format(new Date(month.date), "MMM yy"))
    const incomes = reversedMonthlyAnalytics.map(month => month.income / 100)
    const expenses = reversedMonthlyAnalytics.map(month => month.outcome / 100)
    const average = reversedMonthlyAnalytics.map(month => month.balance / 100)

    const greaterSavingsPeriod = reversedMonthlyAnalytics.map(month => {
        const findedDate = analyticsReport.greaterIncomeMonthes.find((date) => date === month.date)
        if (!findedDate) return undefined
        return month.balance / 100
    })

    return { dates, incomes, expenses, average, greaterSavingsPeriod }
}