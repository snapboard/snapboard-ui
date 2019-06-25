import React from 'react'
import renderer from 'react-test-renderer'
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

test('Renders basic Doughnut', () => {
  const component = renderer.create(
    <Doughnut data={data} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
