import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import Settings from '../components/settings'
import Root from "../components/root";
import Xui from '../components/xui'

const routes = {
    path: '/',
    component: Root,
    indexRoute: { component: Xui },
    childRoutes: [
      { path: 'about', component: Settings },
      { path: 'xui', component: Xui }
    //   { path: 'inbox', component: Inbox },
    ]
  }



ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'))
