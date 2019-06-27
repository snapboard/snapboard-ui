import { configure } from '@storybook/react'
import './global.css'

// automatically import all files ending in *.stories.js
const req1 = require.context('../stories', true, /\.stories\.js$/)
const req2 = require.context('../src', true, /.(stories|sb).js$/)
function loadStories() {
  req1.keys().forEach(filename => req1(filename))
  req2.keys().forEach(filename => req2(filename))
}

configure(loadStories, module)
