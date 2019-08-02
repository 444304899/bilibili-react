import React, { Component } from 'react';
require('./TopHot.css');

class TopHot extends Component {
    state = {}
    render() {
        return (
            <div className="top-hot">
                <div className="w">
                    <div className="hot">
                        <div className="turn-pic fl">
                            <ul className="pic">
                                <li>
                                    <a href="#" className="turn-pic-box">
                                        <img src={require('../../images/turnpic.jpg')} />

                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="turn-pic-box">
                                        <img src={require("../../images/lun2.jpg")} />

                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="turn-pic-box">
                                        <img src={require("../../images/lun3.jpg")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="turn-pic-box">
                                        <img src={require("../../images/lun4.jpg")} />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="turn-pic-box">
                                        <img src={require("../../images/lun5.jpg")} />

                                    </a>
                                </li>
                            </ul>
                            <ul className="bottom">
                                <li><a href="#" className="introduce">你想长生不老吗？</a></li>
                                <li><a href="#" className="introduce">一个公式带你解读天下英语</a></li>
                                <li><a href="#" className="introduce">动漫展览</a></li>
                                <li><a href="#" className="introduce">up主426创作日志</a></li>
                                <li><a href="#" className="introduce">这歌上头，拯救你的语文成绩</a></li>
                            </ul>
                            <ul className="point">
                                <span className="on"></span>
                                <span className=""></span>
                                <span className=""></span>
                                <span className=""></span>
                                <span className=""></span>
                            </ul>
                        </div>
                        <div className="flex">
                            <div className="video">
                                <a href="#" className="video-box">
                                    <img src={require("../../images/hot1.jpg")} />
                                    <p className="video-title">Anitama——2019年2月精彩作画集锦及笔记</p>
                                    <div className="video-mask">
                                        <p className="title">Anitama——2019年2月精彩作画集锦及笔记</p>
                                        <p className="autor">up主：AnimeTamashii</p>
                                        <p className="count">播放：3.6万</p>
                                        <div className="watch-later"></div>
                                    </div>
                                </a>

                                <span className="yesterday"></span>
                                <span className="tomorrow"></span>
                            </div>
                            <div className="video">
                                <a href="#" className="video-box">
                                    <img src={require("../../images/hot2.jpg")} />
                                    <p className="video-title">向前一步“神作”，向后一步“粪作”？我眼中的盾之勇者成名录</p>
                                    <div className="video-mask">
                                        <p className="title">向前一步“神作”，向后一步“粪作”？我眼中的盾之勇者成名录</p>
                                        <p className="autor">up主：依然小智</p>
                                        <p className="count">播放：15.9万</p>
                                        <div className="watch-later"></div>
                                    </div>
                                </a>
                            </div>
                            <div className="video">
                                <a href="#" className="video-box">
                                    <img src={require("../../images/hot3.jpg")} />
                                    <p className="video-title">我们作为休伯利安的舰长，为何过的如此苦涩？</p>
                                    <div className="video-mask">
                                        <p className="title">我们作为休伯利安的舰长，为何过的如此苦涩？</p>
                                        <p className="autor">up主：卡特亚</p>
                                        <p className="count">播放：16.6万</p>
                                        <div className="watch-later"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex-bottom">


                            <div className="flex">
                                <div className="video">
                                    <a href="#" className="video-box">
                                        <img src={require("../../images/hot4.jpg")} />
                                        <p className="video-title">【七日之都手书】「リセット」HB. to伊萨克</p>
                                        <div className="video-mask">
                                            <p className="title">【七日之都手书】「リセット」HB. to伊萨克</p>
                                            <p className="autor">up主：萤实</p>
                                            <p className="count">播放：1.7万</p>
                                            <div className="watch-later"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="video">
                                    <a href="#" className="video-box">
                                        <img src={require("../../images/hot5.jpg")} />
                                        <p className="video-title">玩啥游戏 01 旁白君归来！古剑3种田做菜打个牌</p>
                                        <div className="video-mask">
                                            <p className="title">玩啥游戏 01 旁白君归来！古剑3种田做菜打个牌</p>
                                            <p className="autor">up主：玩啥游戏官方</p>
                                            <p className="count">播放：29.7万</p>
                                            <div className="watch-later"></div>
                                        </div>
                                    </a>
                                </div>
                                <div className="video">
                                    <a href="#" className="video-box">
                                        <img src={require("../../images/hot6.jpg")} />
                                        <p className="video-title">艾露莎14分钟告诉你4部魔鬼恋人到底讲了啥</p>
                                        <div className="video-mask">
                                            <p className="title">艾露莎14分钟告诉你4部魔鬼恋人到底讲了啥</p>
                                            <p className="autor">up主：鸟海病艾露莎</p>
                                            <p className="count">播放：5.1万</p>
                                            <div className="watch-later"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default TopHot;