import React from 'react'
import Doughnut from '../Doughnut'
import Funnel from '../Funnel'
import Radar from '../Radar'
import Bar from '../Bar'
import Line from '../Line'

const types = {
  doughnut: Doughnut,
  bar: Bar,
  line: Line,
  funnel: Funnel,
  radar: Radar,
}

export default function Chart ({ type, ...props }) {
  const Component = types[type] || Bar
  return <Component {...props} />
}
