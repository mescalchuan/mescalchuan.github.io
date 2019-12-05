import React, { Component } from 'react'
import common from "@/js/common";
import '@/css/root.scss'
import { Menu, Icon,Row, Col, Card } from 'antd';
import { Lifecycle, RouteContext } from 'react-router'
import marked from 'marked';
//import hljs from 'highlight';


const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

const pathnameExc = pathname => {
    let _pathname = pathname
    if(pathname.indexOf('/') > -1) {
        if(_pathname == '/xui') {
            _pathname = ''
        }
        else {
            _pathname = pathname.substring(1)
        }
    }
    else {
        if(_pathname == 'xui') {
            _pathname = ''
        }
    }
    return _pathname
}

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "root",
            message: common.message,
            current: 'xui',
        }
    }
    handleClick = (e) => {
        console.log('click ', e);
        console.log(this.props.history.push(e.key))
        this.setState({
          current: e.key,
        });
      }
      componentWillMount() {
        // marked相关配置
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            // highlight: function(code) {
            //     return hljs.highlightAuto(code).value;
            // },
        });
        this.setState({
            current: pathnameExc(this.props.location.pathname)
        })
    }
    render() {
        return (
            <div>
               <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                    <Icon type="mail" />Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" disabled>
                    <Icon type="appstore" />Navigation Two
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                    </Menu.Item>
                </Menu>
                <Row>
                    <Col span={4}>
                        <Menu
                            onClick={this.handleClick}
                            openKeys={['sub1']}
                            selectedKeys={[this.state.current]}
                            //defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item key="xui">
                                <Icon type="home" />
                                X-UI
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="layout" /><span>Components</span></span>}>
                                <MenuItemGroup key="layout" title="布局">
                                    <Menu.Item key="flex">Flex</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="navigation" title="导航">
                                    <Menu.Item key="drawerLayout">Drawer</Menu.Item>
                                    <Menu.Item key="header">Header</Menu.Item>
                                    <Menu.Item key="tabbar">Tabbar</Menu.Item>
                                    <Menu.Item key="pagination">Pagination</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="form" title="表单">
                                    <Menu.Item key="radio">Radio</Menu.Item>
                                    <Menu.Item key="checkbox">Checkbox</Menu.Item>
                                    <Menu.Item key="counter">Counter</Menu.Item>
                                    <Menu.Item key="switch">Switch</Menu.Item>
                                    <Menu.Item key="slider">Slider</Menu.Item>
                                    <Menu.Item key="search">Search</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="view" title="展示">
                                    <Menu.Item key="badge">Badge</Menu.Item>
                                    <Menu.Item key="icon">Icon</Menu.Item>
                                    <Menu.Item key="carousel">Carousel</Menu.Item>
                                    <Menu.Item key="collapse">Collapse</Menu.Item>
                                    <Menu.Item key="card">Card</Menu.Item>
                                    <Menu.Item key="list">List</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="operate" title="操作">
                                    <Menu.Item key="button">Button</Menu.Item>
                                    <Menu.Item key="actionSheet">ActionSheet</Menu.Item>
                                    <Menu.Item key="toast">Toast</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={12}>
                        <div style={{padding: '24px 32px'}} >
                            {this.props.children}
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{padding: '24px 32px'}} >
                            <div style={{position:'fixed', right:'50px', top: '60px'}}>
                                <img style={{width:'350px'}} src={'../images/iphone8-tt.jpg'}/>
                                <iframe src={"https://mescalchuan.github.io/xui-example/pages/index.html#" + pathnameExc(this.props.location.pathname)} style={{
                                    position:'absolute', 
                                    top: '88px', 
                                    left: '24px', 
                                    width:'303px', 
                                    height: '539px',
                                    border: 0
                                }}/>
                            </div>
                            
                        </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

