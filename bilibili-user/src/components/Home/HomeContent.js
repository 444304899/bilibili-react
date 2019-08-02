import React, { Component } from 'react';
require('./HomeContent.css')

class HomeContent extends Component {
    state = {}
    render() {
        return (
            <div className="body">
                <div className="w">
                    {/* <!--推广 开始--> */}
                    <div className="tui">
                        <div className="item-left" style={{width: '700px'}}>
                            <div className="tit">
                                <i></i>
                                <span className="tit-text">推广</span>
                            </div>

                            <div className="flex">
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/tuiguang1.jpg")} />
                                        <div className="video-mask">
                                            <p className="video-time">03:21</p>
                                            <div className="watch-later"></div>
                                        </div>
                                        <p className="text">超火《出山》改编版《入世》，戏腔高能！</p>
                                    </div>
                                </a>
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/tuiguang2.jpg")} />
                                        <div className="video-mask">
                                            <p className="video-time">03:49</p>
                                            <div className="watch-later"></div>
                                        </div>
                                        <p className="text">【高达40周年纪念/硬核高燃/AMV】带你渐渐燃到顶点！！！热血的40年！！！高达40周年动画作品混剪！！</p>
                                    </div>
                                </a>
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/tuiguang3.jpg")} />
                                        <div className="video-mask">
                                            <p className="video-time">03:04</p>
                                            <div className="watch-later"></div>
                                        </div>
                                        <p className="text">【经费燃烧|/灵魂作画】埼玉VS饿狼 —— 一拳超人FLASH动画【个人动画】</p>
                                    </div>
                                </a>
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/tuiguang4.jpg")} />
                                        <div className="video-mask">
                                            <p className="video-time">04:00</p>
                                            <div className="watch-later"></div>
                                        </div>
                                        <p className="text">【治愈剧情混剪】在我再次迷失之前—— 一切都会好起来的</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item-right">
                            <div className="online">
                                <a href="">在线人数：3945833</a>
                                <em></em>
                                <a href="">最新投稿：49998</a>
                            </div>
                            <img src={require("../../images/tuiguang.jpg")} style={{height: '150px'}} />
                        </div>
                    </div>
                    {/* <!--推广 结束--> */}

                    <a href="" className="ad-box">
                        <div className="ad">
                            <img src={require("../../images/ad.jpg")} />
                        </div>
                        <img src={require("../../images/ads.png")} />
                    </a>

                    {/* <!--正在直播 开始--> */}

                    <div className="tui" style={{height: '336px', marginTop: '15px'}}>
                        <div className="item-left" style={{width: '700px'}}>
                            <div className="tit" style={{width: '700px'}}>
                                <i style={{backgroundPosition:' -141px -652px'}}></i>
                                <span className="tit-text">正在直播</span>
                                <p className="tit-online">当前共有<span>11131</span>个在线直播</p>
                                <a href="" className="fire"><i className="ico"></i>233秒居然能做这些！</a>
                                <a href="" className="tit-more">更多<i className="ico"></i></a>
                                <div className="new">
                                    <i className="ico new-ico"></i>
                                    <span className="info">
                                        <b>157998</b>条新动态
                                </span>
                                </div>
                            </div>

                            <div className="flex">
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/living1.webp")} style={{width: '160px',height: '100px'}}/>
                                        <div className="ao">
                                            <span className="auther">哔哩哔哩LOL赛事直播</span>
                                            <span className="peop">
                                                <i></i>
                                                296.0万
                                        </span>
                                        </div>
                                        <div className="video-mask"
                                            style={{backgroundImage: 'url("https://i0.hdslb.com/bfs/live/13242941.jpg@.webp?03051651")',boxSizing:"border-box",width: '160px',height: '100px',backgroundSize: 'contain'}}>
                                        </div>
                                        <p className="text" title="英雄联盟LCS赛区-春季赛#01">
                                            英雄联盟LCS赛区-春季赛</p>
                                        <p className="num" style={{fontSize: '12px'}}>
                                            网游 · 英雄联盟
                                    </p>
                                    </div>
                                </a>
                            </div>

                            <div className="flex" style={{marginTop: '68px'}}>
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/living5.webp")} style={{width: '160px',height: '100px'}}/>
                                        <div className="ao">
                                            <span className="auther">哔哩哔哩LOL赛事直播</span>
                                            <span className="peop">
                                                <i></i>
                                                296.0万
                                        </span>
                                        </div>
                                        <div className="video-mask"
                                            style={{backgroundImage: 'url(https://i0.hdslb.com/bfs/live/13242941.jpg@.webp?03051651)'}}>
                                        </div>
                                        <p className="text" title="每天都是勤奋的一天呢#01">
                                            每天都是勤奋的一天呢</p>
                                        <p className="num" style={{fontSize: '12px'}}>
                                            电台 · 唱见电台
                                    </p>
                                    </div>
                                </a>
                            </div>



                        </div>
                        <div className="item-right">

                            <div className="online" style={{backgroundColor: '#fff',textAlign: 'left'}}>
                                <a href="" style={{ color: '#000'}}>直播排行</a>
                                <a href="" style={{ color: '#000',marginLeft: '12px'}}>关注的主播</a>
                                <a href="" style={{ color: '#000',marginLeft: '12px'}}>为您推荐</a>
                            </div>
                            <div className="livinground">
                                <ul className="pic">
                                    <li><img src={require("../../images/overwatch.png")} /></li>
                                    <li><img src={require("../../images/lvr2.jpg" )} /></li>
                                    <li><img src={require("../../images/lvr3.jpg" )} /></li>
                                </ul>
                                <ul className="bottom">
                                    <li><a>点击申请测试资格</a></li>
                                    <li><a>55号直播间原画呈现KPL春季赛</a></li>
                                    <li><a>花之初少女</a></li>
                                </ul>
                                <ul className="point">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </ul>

                            </div>

                            <div className="whsp-box" style={{zoom: 1}}>
                                <a href="" className="fl picture">
                                    <img src={require("../../images/wh.png" )} />
                                </a>
                                <a href="" className="fr picture">
                                    <img src={require("../../images/sp.png" )} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!--正在直播 结束--> */}

                    {/* <!--动画 开始--> */}
                    <div className="tui" style={{height: '336px',marginTop: '50px'}}>
                        <div className="item-left" style={{width: '700px'}}>
                            <div className="tit">
                                <i style={{backgroundPosition: '-141px -908px'}}></i>
                                <span className="tit-text">动画</span>
                            </div>

                            <div className="flex">
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <i className="ico medal" style={{backgroundPosition: '-849px -212px'}}></i>
                                        <img src={require("../../images/donghua1.webp")} />
                                        <div className="video-mask">
                                            <div className="watch-later" style={{right: '6px',bottom: '4px'}}></div>
                                            <div className="video-time">03:31</div>
                                        </div>
                                        <p className="text" title="抖B短视频上线啦！当二次元角色玩上短视频，魔性搞笑高能集锦#01">
                                            抖B短视频上线啦！当二次元角色玩上短视频，魔性搞笑高能集锦#01</p>
                                        <p className="num">
                                            <span className="play"><i className="ico"
                                                style={{backgroundPosition: '-282px -90px'}}></i>64万</span>
                                            <span className="danmu"><i className="ico"
                                                style={{backgroundPosition: '-282px -218px'}}></i>2423</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="flex" style={{marginTop: '68px'}}>
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <i className="ico medal" style={{backgroundPosition: '-849px -148px'}}></i>
                                        <img src={require("../../images/donghua5.webp")} />
                                        <div className="video-mask">
                                            <div className="watch-later" style={{right: '6px',bottom: '4px'}}></div>
                                            <div className="video-time">07:21</div>
                                        </div>
                                        <p className="text" title="【1080P/漩涡鸣人】本该黑化，却成为救世主的忍者！#bilibili新星计划#">
                                            【1080P/漩涡鸣人】本该黑化，却成为救世主的忍者！#bilibili新星计划#</p>
                                        <p className="num">
                                            <span className="play"><i className="ico"
                                                style={{backgroundPosition: '-282px -90px'}}></i>5118</span>
                                            <span className="danmu"><i className="ico"
                                                style={{backgroundPosition: '-282px -218px'}}></i>773</span>
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="item-right">
                            <div className="online" style={{backgroundColor: '#fff',textAlign: 'left'}}>
                                <a href="" style={{ color: '#000',float: 'left',fontSize: '18px',fontWeight: '400'}}>排行</a>
                            </div>
                            <ul className="rank-list">
                                <li className="rank-item f-box"><i className="order" style={{background: '#f25d8e'}}>1</i>

                                    <a href="" target="_blank" className="rank-item-box" style={{zoom: 1}}>
                                        <div className="f-pic">
                                            <img src={require("../../images/xqyb.webp" )} />
                                        </div>
                                        <div className="f-text">
                                            <p className="rank-title" style={{whiteSpace: 'normal',overflow: 'hidden'}}>
                                                向前一步“神作”，向后一步“粪作”？我眼中的盾之勇者成名录</p>
                                            <span className="rank-total">综合评分：38.5万</span>
                                        </div>

                                    </a>
                                </li>
                                <li className="rank-item"><i className="order" style={{background: '#f25d8e'}}>2</i>
                                    <a href="" target="_blank" className="rank-item-box">
                                        <p className="rank-title">五等分的新娘</p>
                                        <span className="rank-total">更新至第8话</span>
                                    </a>
                                </li>
                            </ul>
                            <div>
                                <a href="" target="_blank" className="more" style={{margin: 'auto'}}>
                                    查看更多
                                <i className="ico"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!--动画 结束--> */}

                    {/* <!--番剧 开始--> */}
                    <div className="tui" style={{height: '494px',marginTop: '50px'}}>
                        <div className="item-left" style={{width: '700px'}}>
                            <div className="tit">
                                <i style={{backgroundPosition: '-141px -140px'}}></i>
                                <span className="tit-text">番剧</span>
                            </div>

                        </div>
                        <div className="item-right">
                            <div className="online" style={{backgroundColor: '#fff',textAlign: 'left'}}>
                                <a href="" style={{ color: '#000',float: 'left',fontSize: '18px',fontWeight: '400'}}>排行</a>
                            </div>
                            <ul className="rank-list">
                                <li className="rank-item"><i className="order" style={{background: '#f25d8e'}}>1</i>
                                    <a href="" target="_blank" className="rank-item-box">
                                        <p className="rank-title">辉夜大小姐想让我告白~天才们的恋爱头脑战~</p>
                                        <span className="rank-total">更新至第8话</span>
                                    </a>
                                </li>
                                <li className="rank-item"><i className="order" style={{background: '#f25d8e'}}>2</i>
                                    <a href="" target="_blank" className="rank-item-box">
                                        <p className="rank-title">五等分的新娘</p>
                                        <span className="rank-total">更新至第8话</span>
                                    </a>
                                </li>

                            </ul>
                            <div>
                                <a href="" target="_blank" className="more" style={{margin: 'auto'}}>
                                    查看更多
                                <i className="ico"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- 番剧动态 开始 --> */}
                    <div className="tui" style={{height: '336px'}}>
                        <div className="item-left" style={{width: '700px'}}>
                            <div className="tit" style={{width: '700px'}}>
                                <span className="tit-text">番剧动态</span>
                                <a href="" className="tit-more">更多<i className="ico"></i></a>
                                <div className="new">
                                    <i className="ico new-ico"></i>
                                    <span className="info">
                                        <b>157998</b>条新动态
                                </span>
                                </div>
                            </div>

                            <div className="flex">
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <i className="ico medal" style={{backgroundPosition: '-849px -212px'}}></i>
                                        <img src={require("../../images/donghua1.webp")} />
                                        <div className="video-mask">
                                            <div className="watch-later" style={{right: '6px',bottom: '4px'}}></div>
                                            <div className="video-time">03:31</div>
                                        </div>
                                        <p className="text" title="抖B短视频上线啦！当二次元角色玩上短视频，魔性搞笑高能集锦#01">
                                            抖B短视频上线啦！当二次元角色玩上短视频，魔性搞笑高能集锦#01</p>
                                        <p className="num">
                                            <span className="play"><i className="ico"
                                                style={{backgroundPosition: '-282px -90px'}}></i>64万</span>
                                            <span className="danmu"><i className="ico"
                                                style={{backgroundPosition: '-282px -218px'}}></i>2423</span>
                                        </p>
                                    </div>
                                </a>

                            </div>

                            <div className="flex" style={{marginTop: '58px'}}>
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <i className="ico medal" style={{backgroundPosition: '-849px -148px'}}></i>
                                        <img src={require("../../images/donghua5.webp")} />
                                        <div className="video-mask">
                                            <div className="watch-later" style={{right: '6px',bottom: '4px'}}></div>
                                            <div className="video-time">07:21</div>
                                        </div>
                                        <p className="text" title="【1080P/漩涡鸣人】本该黑化，却成为救世主的忍者！#bilibili新星计划#">
                                            【1080P/漩涡鸣人】本该黑化，却成为救世主的忍者！#bilibili新星计划#</p>
                                        <p className="num">
                                            <span className="play"><i className="ico"
                                                style={{backgroundPosition: '-282px -90px'}}></i>5118</span>
                                            <span className="danmu"><i className="ico"
                                                style={{backgroundPosition: '-282px -218px'}}></i>773</span>
                                        </p>
                                    </div>
                                </a>

                            </div>

                        </div>
                        <div className="item-right">

                            <div className="online" style={{backgroundColor: '#fff',textAlign: 'left'}}>
                                <a href="" style={{ color: '#000'}}>特别推荐</a>
                            </div>
                            <div className="fan">
                                <ul className="pic">
                                    <li><img src={require("../../images/fanjv.jpg")} /></li>
                                    <li><img src={require("../../images/fan2.jpg" )} /></li>
                                    <li><img src={require("../../images/fan3.jpg" )} /></li>
                                    <li><img src={require("../../images/fan4.jpg" )} /></li>
                                </ul>
                                <ul className="bottom">
                                    <li><a>五份的可爱，五份的治愈</a></li>
                                    <li><a>天才们（？）的恋爱头脑站</a></li>
                                    <li><a>我们都是共鸣者</a></li>
                                    <li><a href="">ONE老师又一代表作</a></li>
                                </ul>
                                <ul className="point">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/* <!-- 番剧动态 结束 --> */}
                    {/* <!--番剧 结束--> */}


                    {/* <!--特别推荐 开始--> */}
                    <div className="tui" style={{marginTop: '50px'}}>
                        <div className="item-left" style={{width: '700px'}}>
                            <div className="tit">
                                <i></i>
                                <span className="tit-text">推广</span>
                            </div>

                            <div className="flex">
                                <a href="#" className="video-box">
                                    <div className="video">
                                        <img src={require("../../images/tuiguang1.jpg")} />
                                        <div className="video-mask">
                                            <p className="video-time">03:21</p>
                                            <div className="watch-later"></div>
                                        </div>
                                        <p className="text">超火《出山》改编版《入世》，戏腔高能！</p>
                                    </div>
                                </a>

                            </div>
                        </div>
                        <div className="item-right">
                            <div className="online" style={{backgroundColor: '#fff'}}>
                                <a href=""></a>
                                <em></em>
                                <a href=""></a>
                            </div>
                            <img src={require("../../images/tebie.webp")} />
                        </div>
                    </div>
                    {/* <!--特别推荐 结束--> */}

                </div>
            </div>
        );
    }
}

export default HomeContent;