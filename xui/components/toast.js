import React, { Component } from 'react';
import xuimd from '../markdown/elements/toast.md'
import md from 'markdown-it'
var markdown = new md({
    html: false,
});
export default class Toast extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        //let content = markdown.render(xuimd)
        //console.log(content)
        return (
            <div className={'markdown'}>
                <div dangerouslySetInnerHTML={{__html: xuimd}}>{
                    
                }</div>
            </div>
        )
    }
}