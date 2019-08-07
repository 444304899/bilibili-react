import React, { Component } from 'react';
import MyHeader from '../Home/Header';
import TopNav from '../Home/TopNav';
require('./all.css');

class one extends Component {
    state = {  }
    render() {
        return (
            <div>
                <MyHeader></MyHeader>
                <TopNav></TopNav>
            </div>
        );
    }
}

export default one;