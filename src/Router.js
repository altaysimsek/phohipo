import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import { Homepage } from './Pages/'

const Router = () => {
  return (
    <Routers>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Routers>
  )
}

export default Router
