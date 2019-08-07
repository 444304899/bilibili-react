import React, { Component } from 'react';
import MyHeader from './Header';
import TopNav from './TopNav';
import Content from './Content';
require('./Home.css');


class Home extends Component {
    state = {  }
    render() {
        return (
            <div>
                <MyHeader></MyHeader>
                <TopNav></TopNav>
                <Content></Content>
            </div>
        );
    }
}

export default Home;
