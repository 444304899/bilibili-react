import React, { Component } from 'react';
import { Avatar,Icon } from 'antd';
import 'antd/dist/antd.css';
require('./Header.css');

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="top">
                <a href="#" className="top-logo">
                    <img src={require("../../images/phone-top-logo.fw.png")} />
                </a>
                {/* <a href="#" className="top-search">
                    <i></i>
                </a> */}
                <a className="top-search" href="/search.html" name="search">
                    <Icon type="search" className="top-search-icon" />
                    <span>灵笼今天更新了吗？</span>
                </a>
                {/* <a href="#" className="top-admin">
                    <div><img src={require("../../images/phone-top-logo.fw.png")} style={{ width: '100%' }} /></div>
                </a> */}
                <a className="headimg">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="user" />
                </a>
                <a href="#" className="top-downapp">
                    <p>下载 App</p>
                </a>
            </div >
        );
    }
}

export default Header;
