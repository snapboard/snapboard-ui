import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import Card from 'util/Card'
import BigNumber from '../BigNumber'

export const data = {
  showRelative: true,
  datasets: [{
    label: 'Subscribers',
    data: 1000,
  }, {
    label: 'Today',
    data: 900,
  }, {
    label: 'Week',
    data: 800,
  }, {
    label: 'Month',
    data: 500,
  }],
}

storiesOf('Components/Charts', module)
  .add('BigNumber', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber label='Subscribers' data={data} />
    </Card>
  ))
  .addDecorator(withKnobs)
