import React from 'react'
import Doughnut from '../Doughnut'
import Funnel from '../Funnel'
import Radar from '../Radar'
import BigNumber from '../BigNumber'
import Bar from '../Bar'
import Line from '../Line'

const types = {
  doughnut: Doughnut,
  bar: Bar,
  line: Line,
  funnel: Funnel,
  radar: Radar,
  number: BigNumber,
}

export default function Chart ({ type, ...props }) {
  const Component = types[type] || Bar
  return <Component {...props} />
}
