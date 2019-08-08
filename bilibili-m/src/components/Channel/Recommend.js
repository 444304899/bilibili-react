import React, { Component } from 'react';
import MyVideo from './myVideo';
require('./all.css');

class Recommend extends Component {
    state = {}
    render() {
        return (
            <div className="index__recommend__src-partition-recommend-">
                <div className="index__title__src-partition-recommend-">
                    <p>热门推荐</p>
                </div>
                <a className="index__rank__src-partition-recommend-" href="/ranking.html?tid=1">
                    <div className="index__words__src-partition-recommend-">
                        <p>排行榜</p>
                    </div>
                    <div className="index__arrow__src-partition-recommend-">
                    </div>
                </a>
                <MyVideo></MyVideo>
            </div>
        );
    }
}

export default Recommend;