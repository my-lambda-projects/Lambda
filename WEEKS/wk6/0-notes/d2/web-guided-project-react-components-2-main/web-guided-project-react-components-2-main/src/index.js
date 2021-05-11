// Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'

// Importing the styles - the bundler does some magic!
import './styles.less'

// Importing a React component from another file
import App from './components/App'

render(
  <App />,
  document.querySelector('#root')
)
