import React from 'react'
import Button from './Button'
import renderer from 'react-test-renderer'

test('Testing <Button /> component', () => {
  const component = renderer.create(
    <Button>testing button</Button>
  )
  const instance = component.root

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(instance.children[0]._fiber.elementType).toBe('button')
})