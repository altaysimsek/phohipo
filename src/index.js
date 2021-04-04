import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Header } from './components'
import Router from './Router'
import PhotoProvider from './Context/PhotosWrapper'

ReactDOM.render(
  <PhotoProvider>
    <Header></Header>
    <Router style={{ marginTop: '80px' }}></Router>
  </PhotoProvider>,
  document.getElementById('root')
)
