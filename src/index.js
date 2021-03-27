import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Header } from './components'
import Router from './Router'

ReactDOM.render(
  <>
    <Header></Header>
    <Router></Router>
  </>,
  document.getElementById('root')
)
