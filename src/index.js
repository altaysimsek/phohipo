import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Header } from './components'
import Router from './Router'

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Router></Router>
  </React.StrictMode>,
  document.getElementById('root')
)
