import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import { Homepage, Discover, SearchPage } from './Pages/'

const Router = () => {
  return (
    <Routers>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Routers>
  )
}

export default Router
