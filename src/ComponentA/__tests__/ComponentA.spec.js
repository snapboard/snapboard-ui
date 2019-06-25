import React from 'react'
import ComponentA from '../ComponentA'
import renderer from 'react-test-renderer'

test('Renders basic ComponentA', () => {
  const component = renderer.create(
    <ComponentA />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
