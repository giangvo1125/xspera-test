import React from 'react'
import { Route, IndexRoute, Link, Redirect } from 'react-router'

//COMPONENT
import ContentComponent from './components/content'
import DashBoardComponent from './components/dashboard'
import ReviewComponent from './components/review'
//END COMPONENT

//HOC
//END HOC

const routes = (
  	<Route component={(ContentComponent)}>
  		<Route path='/products' component={DashBoardComponent}/>
  		<Route path='/products/review' component={ReviewComponent} />
    	<Redirect from='*' to='/products' />
  	</Route>
)

export default routes