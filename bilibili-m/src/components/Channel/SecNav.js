import React, { Component } from 'react';
import TopNav from '../Home/TopNav';
require('./all.css');

class SecNav extends Component {
    state = {}
    render() {
        return (
            <div className="index__partBox__src-partition-zone-">
                <TopNav></TopNav>
                <div className="index__partBox__src-partition-secondZone-">
                    <div className="index__pagesContainer__src-partition-secondZone-">
                        <div className="index__scrollContainer__src-partition-secondZone-">
                            <a className="index__curTab__src-partition-secondZone-tab-" href="/channel/1.html">
                                <p>推荐</p>
                            </a>
                            <a className="index__tab__src-partition-secondZone-tab-" href="/channel/24.html">
                                <p>MAD·AMV</p>
                            </a>
                            <a className="index__tab__src-partition-secondZone-tab-" href="/channel/25.html">
                                <p>MMD·3D</p>
                            </a>
                            <a className="index__tab__src-partition-secondZone-tab-" href="/channel/47.html">
                                <p>短片·手书·配音</p>
                            </a>
                            <a className="index__tab__src-partition-secondZone-tab-" href="/channel/27.html">
                                <p>综合</p>
                            </a>
                            <a className="index__tab__src-partition-secondZone-tab-" href="/channel/86.html">
                                <p>特摄</p>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default SecNav;