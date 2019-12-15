import React from 'react'
import Player from './Player'
import renderer from 'react-test-renderer'

const song = {
  id: 1,
  name: 'testing song',
  preview_url: 'https://cdn.test.mp3',
  spotify_url:'https://open.spotify.com/song'
}

test('Testing <Player /> component', () => {
  const component = renderer.create(
    <Player song={song}/>
  )
  const instance = component.root

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(instance.children[0]._fiber.elementType).toBe('div')
})