import React, { Component } from 'react';
require('FixedBar.css');

class FixedBar extends Component {
    state = {}
    render() {
        return (
            <div className="fixed-bar">
                <div className="bar-bg">
                    <div className="name-img">

                    </div>
                </div>
                <div className="fiex-list">
                    <div className="index-name">直播</div>
                    <div className="index-name">动画</div>
                    <div className="index-name">番剧</div>
                    <div className="index-name">国创</div>
                    <div className="index-name">音乐</div>
                    <div className="index-name">舞蹈</div>
                    <div className="index-name">游戏</div>
                    <div className="index-name">科技</div>
                    <div className="index-name">数码</div>
                    <div className="index-name">生活</div>
                    <div className="index-name">鬼畜</div>
                    <div className="index-name">时尚</div>
                    <div className="index-name">广告</div>
                    <div className="index-name">娱乐</div>
                    <div className="index-name">电影</div>
                    <div className="index-name">TV剧</div>
                    <div className="index-name">影视</div>
                    <div className="index-name">纪录片</div>
                    <div className="item customize">
                        <i className="icon"></i>排序
                    </div>
                </div>
                <div className="s-line"></div>
                <div className="back-top icon"></div>
                <div className="app-download">
                    <a href="//app.bilibili.com/?channel=home_recommend" target="_blank">
                        <div id="elevator-mobile-app" className="app-icon"></div>
                        <div className="app-tips-icon"></div>
                    </a>
                </div>
            </div>
        );
    }
}

export default FixedBar;