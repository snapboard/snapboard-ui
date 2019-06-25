import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'
import Card from 'util/Card'
import Doughnut from '../Doughnut'
import colors from 'util/colors'

export const data = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: colors,
  }, {
    data: [20, 10, 5],
    backgroundColor: colors,
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'Red',
    'Yellow',
    'Blue',
  ],
}

storiesOf('Components/Charts', module)
  .add('Doughnut', () => (
    <Card width={400} height={400}>
      <Doughnut data={data} />
    </Card>
  ))
