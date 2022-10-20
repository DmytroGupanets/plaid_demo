import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import { getLineGraphicData } from '../../helpers/GraphicChartsData'
import Button from '../Button/Button'
import { configureLineChartData, configureDoughnutData, LineOptions, LineOptionsAverage, configureAverageLineChartData } from './Charts/Charts'
import { InfoGraphicStyled } from './InfoGraphicStyled'


const InfoGraphic = ({ analyticsReport, isOpenGraph, onOpenGraphClick, isLoading }) => {


    const lineGraphicData = analyticsReport && getLineGraphicData(analyticsReport)


    return <InfoGraphicStyled isLoading={isLoading}>

        <div className='headContainer'>
            <h2>Charts/graphs</h2>
            <Button onClick={onOpenGraphClick} isPreloader={isLoading} >{isOpenGraph ? 'Hide' : 'Open'}</Button>
        </div>

        {isOpenGraph && <>
            <div className='topContainer'>
                <h2 className='subtitle'>User`s income/outcome for the last year:</h2>
                <Line options={LineOptions} data={configureLineChartData(lineGraphicData)} />

                <h2 className='subtitle'>Average monthly income/outcome:</h2>
                <Line options={LineOptionsAverage} data={configureAverageLineChartData(lineGraphicData)} />
            </div>

            <div className='midContainer'>
                <div className='leftCircle'>
                    <h2 className='subtitle'>Income per month</h2>
                    <Doughnut
                        data={configureDoughnutData(lineGraphicData.incomes, lineGraphicData.dates)} />
                </div>
                <div className='rightCircle'>
                    <h2 className='subtitle'>Expenses per month</h2>
                    <Doughnut data={configureDoughnutData(lineGraphicData.expenses, lineGraphicData.dates)} />
                </div>
            </div>

            <div className='lowContainer'>
                <h2 className='subtitle'>Average income/expenses per month</h2>
                <Doughnut
                    data={configureDoughnutData(lineGraphicData.average, lineGraphicData.dates)} />
            </div>
        </>}

    </InfoGraphicStyled>
}


export default InfoGraphic