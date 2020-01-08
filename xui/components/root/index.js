import React, { Component } from 'react'
import common from "@/js/common";
import '@/css/root.scss'
import { Menu, Icon,Row, Col, Card, Input, AutoComplete } from 'antd';
import { Lifecycle, RouteContext } from 'react-router'
import marked from 'marked';
//import hljs from 'highlight';
const { Search } = Input
const { Option, OptGroup } = AutoComplete;

const dataSource = [{
    title: '布局',
    children: [{title: 'Flex'}]
}, {
    title: '导航',
    children: [{title: 'Drawer'}, {title: 'Header'}, {title: 'Tabbar'}, {title: 'Pagination'}]
}, {
    title: '表单',
    children: [{title: 'Radio'}, {title: 'Checkbox'}, {title: 'Counter'}, {title: 'Switch'}, {title: 'Slider'}, {title: 'Search'}]
}, {
    title: '展示',
    children: [{title: 'Badge'}, {title: 'Icon'}, {title: 'Carousel'}, {title: 'Collapse'}, {title: 'Card'}, {title: 'List'}]
}, {
    title: '操作',
    children: [{title: 'Button'}, {title: 'ActionSheet'}, {title: 'Toast'}]
}]

const options = dataSource
  .map(group => (
    <OptGroup key={group.title} label={group.title}>
      {group.children.map(opt => (
        <Option key={opt.title} value={opt.title}>
          {opt.title}
        </Option>
      ))}
    </OptGroup>
));

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

function searchResult(query) {
    let results = []
    dataSource.map(item => {
        if(item.title.includes(query)) {
            results.push(item)
        }
        else {
            let tempRes = []
            item.children.map(_item => {
                let lowerTitle = _item.title.toLowerCase()
                if(lowerTitle.includes(query.toLowerCase())) {
                    tempRes.push(_item)
                }
            })
            if(tempRes.length) {
                let tItem = JSON.parse(JSON.stringify(item))
                tItem.children = tempRes
                results.push(tItem)
            }
        }
    })
    return results
}

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "root",
            message: common.message,
            current: 'xui',
            dataSource: []
        }
    }
    handleClick = (e) => {
        this.props.history.push(e.key)
        this.setState({
          current: e.key,
        });
    }
    handleSearch = value => {
        this.setState({
            dataSource: JSON.parse(JSON.stringify(value ? searchResult(value) : [])),
        });
    }
    onSelect = (value) => {
        if(value == 'Drawer') {
            value = 'DrawerLayout'
        }
        this.handleClick({
            key: value.toLowerCase()
        })
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
               <div className={'header flex justify-space-between'} style={{borderBottom: '1px solid #eee', zIndex: 99}}>
                    <h2>X-UI</h2>  
                    <div className={'flex align-center'}>
                        {/* <Search
                            placeholder="在此输入组件名称"
                            onSearch={value => console.log(value)}
                            style={{ width: 250 }}
                        /> */}
                        <AutoComplete
                            dataSource={this.state.dataSource
                                .map(group => (
                                  <OptGroup key={group.title} label={group.title}>
                                    {group.children.map(opt => (
                                      <Option key={opt.title} value={opt.title}>
                                        {opt.title}
                                      </Option>
                                    ))}
                                  </OptGroup>
                              ))}
                            placeholder={'在此输入组件名称'}
                            optionLabelProp="text"
                            style={{ width: 250 }}
                            onSearch={this.handleSearch}
                            onSelect={this.onSelect}
                        >
                            <Input suffix={<Icon type="search" />} />
                        </AutoComplete>
                        <div>
                            <a style={{marginLeft: '25px'}} target='__blank' href="https://github.com/mescalchuan/x-ui">Github</a>
                        </div>
                    </div> 
               </div>
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

