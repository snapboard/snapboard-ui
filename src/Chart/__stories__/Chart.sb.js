import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, withKnobs } from '@storybook/addon-knobs'
import Card from 'util/Card'
import Chart from '../Chart'

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
  }, {
    label: 'My Second dataset',
    data: [62, 81, 73, 64, 57, 60, 70],
  }],
}

// const options = {
//   Bar: 'bar',
//   Doughnut: 'doughnut',
//   Funnel: 'funnel',
//   Radar: 'radar',
//   Number: 'numher',
// }

storiesOf('Components/Charts/Chart', module)
  .add('Chart - Bar', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <Chart type='bar' data={data} />
    </Card>
  ))
  .add('Chart - Doughnut', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <Chart type='doughnut' data={data} />
    </Card>
  ))
  .add('Chart - Radar', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <Chart type='radar' data={data} />
    </Card>
  ))
  .add('Chart - Funnel', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <Chart type='funnel' data={data} />
    </Card>
  ))
  .add('Chart - Number', () => (
    <Card
      width={number('Width', 400, { range: true, min: 100, max: 600, step: 10 })}
      height={number('Height', 400, { range: true, min: 100, max: 600, step: 10 })}>
      <Chart type='number' data={data} />
    </Card>
  ))
  .addDecorator(withKnobs)
