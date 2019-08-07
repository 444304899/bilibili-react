import React, { Component } from 'react';
import MyHeader from '../Home/Header';
// import TopNav from '../Home/TopNav';
import SecNav from './SecNav';
require('./all.css');

class Channel extends Component {
    state = {  }
    render() {
        return (
            <div>
                <MyHeader></MyHeader>
                {/* <TopNav></TopNav> */}
                <SecNav></SecNav>
                <div className="index__line__src-partition-"></div>
            </div>
        );
    }
}

export default Channel;