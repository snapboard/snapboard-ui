import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import Card from 'util/Card'
import BigNumber from '../BigNumber'

export const data = {
  // showRelative: true,
  labels: ['Month', 'Week', 'Today', 'Latest'],
  datasets: [{
    label: 'Subscribers',
    data: [500, 800, 900, 100000],
  }],
}

const multiDatsets = {
  labels: ['Month', 'Week', 'Today', 'Latest'],
  datasets: [{
    label: 'Subscribers',
    data: [500, 800, 900, 1000],
  }, {
    label: 'Customers',
    data: [300, 500, 700, 900],
  }],
}

storiesOf('Components/Charts/BigNumber', module)
  .add('BigNumber', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber data={data} />
    </Card>
  ))
  .add('BigNumber - No primary label', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber data={{
        labels: ['Month', 'Week', 'Today'],
        datasets: data.datasets,
      }} />
    </Card>
  ))
  .add('BigNumber - Show Relative', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber showRelative data={data} />
    </Card>
  ))
  .add('BigNumber - Prefix', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber data={data} prefix='+' />
    </Card>
  ))
  .add('BigNumber - Basic', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber number={20} label='Payments' />
    </Card>
  ))
  .add('BigNumber - 0', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber number={0} label='Payments' />
    </Card>
  ))
  .add('BigNumber - NaN', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber number={'Hello'} label='Payments' />
    </Card>
  ))
  .add('BigNumber - No sub-labels', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber data={{ labels: ['Payment'], datasets: [{ data: [1010], label: 'Payment' }] }} />
    </Card>
  ))
  .add('BigNumber - Multiple datasets', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber data={multiDatsets} />
    </Card>
  ))
  .add('BigNumber - Multiple datasets - No primary label', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <BigNumber prefix='+' data={{
        labels: ['Month', 'Week', 'Today'],
        datasets: multiDatsets.datasets,
      }} />
    </Card>
  ))
  .addDecorator(withKnobs)
