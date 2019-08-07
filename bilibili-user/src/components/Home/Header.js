import React, { Component } from 'react';
require('./Header.css');
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            kw : ""
        }
        this.search = this.search.bind(this);
    }
    search(k){
        console.log(this.props.all)
    }
    render() {
        return (
            <div className="myheader">
                <div className="menu" style={{display:this.props.all?'none':'block'}}>
                    <div className="w">
                        <div className="search">
                            <div className="bilibili-logo fl">
                                <a href="#" className="head-logo"></a>
                            </div>
                            <div className="search-box fr">
                                <form className="searchform">
                                    <input type="text" value={this.state.kw} className="search-keywords" onChange={this.search} />
                                    <button type="submit" className="search-button"></button>
                                </form>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="rank">
                                    <span>排行榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mask"></div>

                <div className="w ww clearfix">
                    <div className="fl top-left">
                        <ul>
                            <li className="home">
                                <a href="//www.bilibili.com" title="主站" className="text"><i></i> 主站
						</a>
                            </li>
                            <li className="art">
                                <a href="//h.bilibili.com" target="_blank" rel="noopener noreferrer" title="画友" className="text">画友</a>
                            </li>
                            <li className="music">
                                <a href="//www.bilibili.com/audio/home/?type=10" target="_blank" rel="noopener noreferrer" title="来探索bilibili音乐的世界吧~"
                                    className="text">音频</a>
                            </li>
                            <li className="game-center">
                                <a href="//game.bilibili.com " target="_blank " title="游戏中心 " className="text ">游戏中心</a>
                                <div className="game-center-menu">
                                    <div className="left">
                                        <div className="onest">
                                            <a href="https://game.bilibili.com/fgo/event_valentinesday2019/" target="_blank" rel="noopener noreferrer">
                                                <img src={require("../../images/fate.jpg")} alt="命运-冠位指定（Fate/GO）" />
                                                <span className="onest-name">命运-冠位指定（Fate/GO）</span>
                                            </a>
                                        </div>
                                        <div className="twost">
                                            <a href="https://game.bilibili.com/szg/">
                                                <img src={require("../../images/timesing.png")} alt="时之歌" />
                                                <span>时之歌</span>
                                            </a>
                                            <a href="https://www.bilibili.com/blackboard/activity-asksjtbyx.html">
                                                <img src={require("../../images/blueboat.png")} alt="碧蓝航线" />
                                                <span>碧蓝航线</span>
                                            </a>
                                            <a href="https://game.bilibili.com/arkorder/">
                                                <img src={require("../../images/boatorder.png")} alt="方舟指令" />
                                                <span>方舟指令</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="game-center-list">
                                            <a href="https://www.biligame.com/detail/?id=103012"
                                                target="_blank" rel="noopener noreferrer"><span>代号SSR</span></a>
                                            <a href="https://www.biligame.com/detail/?id=102924"
                                                target="_blank" rel="noopener noreferrer"><span>代号：灵</span></a>
                                            <a href="https://www.biligame.com/detail/?id=102971"
                                                target="_blank" rel="noopener noreferrer"><span>墨魂</span></a>
                                            <a href="https://game.bilibili.com/pcr/yuyue/"
                                                target="_blank" rel="noopener noreferrer"><span>公主连结Re:Dive</span></a>
                                            <a href="https://game.bilibili.com/magireco/" target="_blank" rel="noopener noreferrer"><span>魔法纪录
											魔法少女小圆外传</span></a>
                                            <a href="https://game.bilibili.com/dwbgx/" target="_blank" rel="noopener noreferrer"><span>大王不高兴</span></a>
                                            <a href="https://game.bilibili.com/bangdream/yuyue/" target="_blank" rel="noopener noreferrer"><span>BanG
											Dream！</span></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="live">
                                <a href="//live.bilibili.com" target="_blank" rel="noopener noreferrer" title="直播" className="text">直播</a>
                            </li>
                            <li className="buy">
                                <a href="//show.bilibili.com/platform/home.html?msource=pc_web" target="_blank" rel="noopener noreferrer" title="会员购"
                                    className="text">会员购</a>
                            </li>
                            <li className="download">
                                <a href="#" target="_blank" rel="noopener noreferrer" title="下载APP" className="text">
                                    <i style={{fontFamily: 'icomoon'}}></i>下载APP</a>
                                <div className="bin-menu">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="file fr">
                        <a className="tou">投稿</a>
                    </div>
                    <div className="top-right fr">
                        <ul className="fr">
                            <li className="top-item">
                                <a href="#" className="text"></a>
                            </li>
                            <li className="top-item">
                                <a href="#" className="text">大会员</a>
                            </li>
                            <li className="top-item top-msg">
                                <a href="#" className="text">消息</a>
                                <div className="i-frame">
                            <iframe src="https://message.bilibili.com/pages/nav/index" frameBorder="0" width="100%" height="100%"></iframe>
                                </div>
                            </li>
                            <li className="top-item">
                                <a href="#" className="text">动态</a>
                            </li>
                            <li className="top-item top-aft">
                                <a href="#" className="text">稍后再看</a>
                                <div className="aft-menu">
                                    <ul>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer" title="【剧情】小偷家族（2018）【是枝裕和/安藤樱/松冈茉优】">
                                            <div className="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer" title="">
                                            <div className="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                    </ul>
                                    <div>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="more">
                                            查看更多
									<i className="ico"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="top-item top-collect">
                                <a href="#" className="text">收藏</a>
                                <div className="collect-menu">
                                    <ul>
                                        <li>
                                            <a href="#" target="_blank" rel="noopener noreferrer" title="【剧情】小偷家族（2018）【是枝裕和/安藤樱/松冈茉优】">
                                                <div className="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target="_blank" rel="noopener noreferrer" title="">
                                                <div className="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="more">
                                            查看更多
									<i className="ico"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="top-item top-history">
                                <a href="#" className="text">历史</a>
                                <div className="history-menu">
                                    <ul>
                                        <li className="timeline">
                                            <span className="date">今日</span></li>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer" title="【剧情】小偷家族（2018）【是枝裕和/安藤樱/松冈茉优】">
                                            <div className="link">【剧情】小偷家族（2018）</div>
                                            <div className="infor"><span className="watched">100%</span><i className="pc"></i></div>
                                        </a></li>
                                        <li><a href="#" target="_blank" rel="noopener noreferrer" title="">
                                            <div className="link">【剧情】小偷家族（2018）</div>
                                            <div className="infor"><span className="watched">10%</span><i className="pc"></i></div>
                                        </a></li>
                                    </ul>
                                    <div>
                                        <a href="#" target="_blank" rel="noopener noreferrer" className="more">
                                            查看更多
									                     <i className="ico"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}