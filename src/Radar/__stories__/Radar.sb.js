import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from 'util/Card'
import Radar from '../Radar'

// import colors from 'util/colors'

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      // backgroundColor: 'rgba(179,181,198,0.2)',
      // borderColor: 'rgba(179,181,198,1)',
      // pointBackgroundColor: 'rgba(179,181,198,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    },
    {
      label: 'My Second dataset',
      // backgroundColor: 'rgba(255,99,132,0.2)',
      // borderColor: 'rgba(255,99,132,1)',
      // pointBackgroundColor: 'rgba(255,99,132,1)',
      // pointBorderColor: '#fff',
      // pointHoverBackgroundColor: '#fff',
      // pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100],
    },
  ],
}

storiesOf('Components/Charts', module)
  .add('Radar', () => (
    <Card width={400} height={400}>
      <Radar data={data} />
    </Card>
  ))
