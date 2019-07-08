import React from 'react'
import Doughnut from '../Doughnut'
import Funnel from '../Funnel'
import Radar from '../Radar'
import BigNumber from '../BigNumber'
import Bar from '../Bar'

const types = {
  doughnut: Doughnut,
  bar: Bar,
  funnel: Funnel,
  radar: Radar,
  number: BigNumber,
}

export default function Chart ({ type, ...props }) {
  const Component = type[types]
  return <Component {...props} />
}
