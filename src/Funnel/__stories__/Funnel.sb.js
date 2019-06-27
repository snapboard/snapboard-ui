import React from 'react'
import { storiesOf } from '@storybook/react'
// import Color from 'color'
import Card from 'util/Card'
import Funnel from '../'
// import colors from 'util/colors'

// export const data = {
//   labels: ['Impressions', 'Add To Cart', 'Buy'],
//   subLabels: ['Direct', 'Social Media', 'Ads'],
//   colors: [
//     ['#FFB178', '#FF78B1', '#FF3C8E'],
//     ['#A0BBFF', '#EC77FF'],
//     ['#A0F9FF', '#7795FF'],
//   ],
//   values: [
//     [3500, 2500, 6500],
//     [3300, 1400, 1000],
//     [600, 200, 130],
//   ],
// }

export const data = {
  labels: ['Impressions', 'Add To Cart', 'Buy'],
  datasets: [{
    label: 'Direct',
    data: [3500, 2500, 6500],
    // color: '#FFB178',
  }, {
    label: 'Social Media',
    data: [3300, 1400, 1000],
    // color: '#A0BBFF',
  }, {
    label: 'Ads',
    data: [600, 200, 130],
    // color: '#A0F9FF',
  }],
}

storiesOf('Components/Charts', module)
  .add('Funnel', () => (
    <Card width={400} height={400}>
      <Funnel data={data} />
    </Card>
  ))
