import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'
import Settings from '../components/settings'
import Root from "../components/root";

const routes = {
    path: '/',
    component: Root,
    childRoutes: [
      { path: 'about', component: Settings },
    //   { path: 'inbox', component: Inbox },
    ]
  }



ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'))
