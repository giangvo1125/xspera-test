import React from 'react'
import { Route, IndexRoute, Link, Redirect } from 'react-router'

//COMPONENT
import ContentComponent from './components/content'
import DashBoardComponent from './components/dashboard'
//END COMPONENT

//HOC
//END HOC

const routes = (
  	<Route component={(ContentComponent)}>
  		<Route path='/' component={DashBoardComponent}/>
    	{/*<Route path='*' exact={true} component={RequireRoute(LoginComponent)} />*/}
  	</Route>
)

export default routes