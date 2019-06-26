import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withResizeDetector } from 'react-resize-detector'
import Card from 'util/Card'
import Line from '../Line'
// import colors from 'util/colors'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      // fill: true,
      // fill: false,
      // lineTension: 0.1,
      // backgroundColor: 'rgba(75,192,192,0.4)',
      // borderColor: 'rgba(75,192,192,1)',
      // // borderWidth: 5,
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      // fill: true,
      // fill: false,
      // lineTension: 0.1,
      // backgroundColor: 'rgba(75,65,192,0.4)',
      // borderColor: 'rgba(75,65,192,1)',
      // borderCapStyle: 'butt',
      // borderDash: [],
      // borderDashOffset: 0.0,
      // borderJoinStyle: 'miter',
      // pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      // pointBorderWidth: 1,
      // pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,65,192,1)',
      // pointHoverBorderColor: 'rgba(220,220,220,1)',
      // pointHoverBorderWidth: 2,
      // pointRadius: 1,
      // pointHitRadius: 10,
      data: [22, 59, 44, 90, 56, 55, 30],
    },
  ],
  options: {
    scales: {
      display: 'none',
      xAxes: [{
        gridLines: {
          display: false,
        },
      }],
      // yAxes: [{
      //   gridLines: {
      //     display: false,
      //   },
      // }],
    },
  },
}

storiesOf('Components/Charts', module)
  .add('Line', () => (
    <Card width={400} height={400}>
      <Line data={data} />
    </Card>
  ))
