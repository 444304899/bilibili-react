import React, { Component } from 'react';
import MyHeader from '../Home/Header';
// import TopNav from '../Home/TopNav';
import SecNav from './SecNav';
import Recomment from './Recommend';
import Different from './Different';
require('./all.css');

class Channel extends Component {
    state = {  }
    render() {
        return (
            <div className="main">
                <MyHeader></MyHeader>
                {/* <TopNav></TopNav> */}
                <SecNav></SecNav>
                <div className="index__line__src-partition-"></div>
                <Recomment></Recomment>
                <Different tit={'MAD·AMV'}></Different>
                <Different tit={'MMD·3D'}></Different>
                <Different tit={'短片·手书·配音'}></Different>
                <Different tit={'综合'}></Different>
                <Different tit={'特摄'}></Different>
            </div>
        );
    }
}

export default Channel;