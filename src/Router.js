import React from 'react'
import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom'
import { Homepage, Discover, SearchPage, Favorites, Page404 } from './Pages/'

const Router = () => {
  return (
    <Routers>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/explore" component={Discover} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path="/search" component={SearchPage} />
        <Route component={Page404} />
      </Switch>
    </Routers>
  )
}

export default Router
