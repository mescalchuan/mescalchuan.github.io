import React, { Component } from 'react'
import common from "@/js/common";
import '@/css/settings.scss'

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageName: "settings"
        }
    }
	componentDidMount() {
		// mui.init({
		//     subpages:[{
		//       url:"../pages/settings1.html",//下拉刷新内容页面地址
		//       id:"pull",//内容页面标志
		//       styles:{
		//         top:"50px",//内容页面顶部位置,需根据实际页面布局计算，若使用标准mui导航，顶部默认为48px；
		       
		//       }
		//     }]
		// });
	}
    render() {
        return (
            <div>
            	1
            	{/*<div className="settings-container flex flex-column justify-center align-center">
            		<p>This is the <span>{this.state.pageName}</span> page.</p>
            	</div>*/}
            </div>
        )
    }
}