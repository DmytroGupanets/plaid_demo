import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ArcElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

export const LineOptions: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'User`s income/expenses for the last year:',
    }
  },
}

export const LineOptionsAverage: ChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
}


export const configureLineChartData = (lineGraphicData) => {
  const labels = lineGraphicData.dates
  return {
    labels,
    datasets: [
      {
        label: 'Income',
        data: lineGraphicData.incomes,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.3
      },
      {
        label: 'Expenses',
        data: lineGraphicData.expenses, //  labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.3
      }
    ]
  }
}

export const configureAverageLineChartData = (lineGraphicData) => {
  const labels = lineGraphicData.dates

  return {
    labels,
    datasets: [
      {
        label: 'Favorable period',
        data: lineGraphicData.greaterSavingsPeriod,
        borderColor: 'rgb(228, 18, 18)',
        backgroundColor: 'rgba(228, 18, 18, 0.5)',
        borderWidth: 4
      },
      {
        label: 'Average',
        data: lineGraphicData.average,
        borderColor: 'rgb(228, 137, 18)',
        backgroundColor: 'rgba(228, 137, 18, 0.5)'
      },
      {
        label: 'zero',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderColor: 'rgb(61, 61, 61)',
        backgroundColor: 'rgba(61, 61, 61, 0.5)'
      }
    ]
  }
}

export const configureDoughnutData = (data: number[], labels: string[]) => {

  function randomColors() {
    let rgb = []
    let rgba = []

    for (let i = 0; i < 12; i++) {
      const o = Math.round, r = Math.random, s = 255;
      const color = 'rgb(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';

      const colorAlfa = color.slice(0, -1) + ', 0.6)'

      rgb.push(color)
      rgba.push(colorAlfa)
    }
    return { rgb, rgba }
  }

  const colors = randomColors()

  return {
    labels,
    datasets: [
      {
        label: '# of Votes',
        data,
        backgroundColor: colors.rgba,
        borderColor: colors.rgb,
        borderWidth: 1,
      },
    ],
  };

}

