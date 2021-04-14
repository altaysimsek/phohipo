import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Router from './Router'
import PhotoProvider from './Context/PhotosWrapper'

ReactDOM.render(
  <PhotoProvider>
    <Router style={{ marginTop: '80px' }}></Router>
  </PhotoProvider>,
  document.getElementById('root')
)
