import React, { Component } from 'react'
import common from "@/js/common";
import '@/css/root.scss'
import { Menu, Icon,Row, Col, Card } from 'antd';
import { Lifecycle, RouteContext } from 'react-router'
import marked from 'marked';
//import hljs from 'highlight';


const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

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
        console.log(this.props.history.push('xui'))
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
                    <Col span={6}>
                        <Menu
                            onClick={this.handleClick}
                        
                            defaultSelectedKeys={['xui']}
                            //defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            <Menu.Item key="xui">
                                <Icon type="mail" />
                                X-UI
                            </Menu.Item>
                            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Componants</span></span>}>
                                <MenuItemGroup key="g1" title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup key="g2" title="Item 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                    </Col>
                    <Col span={18}>
                        <div style={{padding: '24px 32px'}} >
                            {this.props.children}
                        </div>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

