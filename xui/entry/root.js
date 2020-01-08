import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import Settings from '../components/settings'
import Root from "../components/root";
import Xui from '../components/xui'
import Flex from '../components/flex'
import Drawer from '../components/drawer'
import Header from '../components/header'
import Tabbar from '../components/tabbar'
import Radio from '../components/radio'
import Checkbox from '../components/checkbox'
import Counter from '../components/counter'
import Switch from '../components/switch'
import Slider from '../components/slider'
import Search from '../components/search'
import Pagination from '../components/pagination'
import Badge from '../components/badge'
import Icon from '../components/icon'
import Carousel from '../components/carousel'
import Collapse from '../components/collapse'
import Card from '../components/card'
import List from '../components/list'
import Button from '../components/button'
import ActionSheet from '../components/actionsheet'
import Toast from '../components/toast'

const routes = {
    path: '/',
    component: Root,
    indexRoute: { component: Xui },
    childRoutes: [
      { path: 'about', component: Settings },
      { path: 'xui', component: Xui },
      { path: 'flex', component: Flex },
      { path: 'drawerLayout', component: Drawer },
      { path: 'header', component: Header },
      { path: 'tabbar', component: Tabbar },
      { path: 'radio', component: Radio },
      { path: 'checkbox', component: Checkbox },
      { path: 'counter', component: Counter },
      { path: 'switch', component: Switch },
      { path: 'slider', component: Slider },
      { path: 'search', component: Search },
      { path: 'pagination', component: Pagination },
      { path: 'badge', component: Badge },
      { path: 'icon', component: Icon },
      { path: 'carousel', component: Carousel },
      { path: 'collapse', component: Collapse },
      { path: 'card', component: Card },
      { path: 'list', component: List },
      { path: 'button', component: Button },
      { path: 'actionSheet', component: ActionSheet },
      { path: 'toast', component: Toast }
    //   { path: 'inbox', component: Inbox },
    ]
  }



ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById('app'))
