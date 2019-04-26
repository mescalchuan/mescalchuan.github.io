import React, { Component } from 'react';
import xuimd from '../markdown/introduce.md'
import md from 'markdown-it'
var markdown = new md({
    html: false,
});
export default class Xui extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleDetail: {
                content: "```var a = 1```"
            }
        }
    }
    render() {
        //let content = markdown.render(xuimd)
        //console.log(content)
        return (
            <div>
                <h1>XUI For React / React Native</h1>
                <br/>
                <h2>一个跨平台UI组件库</h2>
                <br/>
                <p>x-ui是基于react native和react开发出的跨android、ios和h5的三端ui组件库。</p>
                <div dangerouslySetInnerHTML={{__html: xuimd}}>{
                    
                }</div>
            </div>
        )
    }
}