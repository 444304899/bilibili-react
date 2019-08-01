import React, { Component } from 'react';

export default class Header {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Header">
                <div class="menu">
                    <div class="w">
                        <div class="search">
                            <div class="bilibili-logo fl">
                                <a href="#" class="head-logo"></a>
                            </div>
                            <div class="search-box fr">
                                <form class="searchform">
                                    <input type="text" value class="search-keywords" />
                                    <button type="submit" class="search-button"></button>
                                </form>
                                <a href="" target="_blank" class="rank">
                                    <span>排行榜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mask"></div>

                <div class="w ww clearfix">
                    <div class="fl top-left">
                        <ul>
                            <li class="home">
                                <a href="//www.bilibili.com" title="主站" class="text"><i></i> 主站
						</a>
                            </li>
                            <li class="art">
                                <a href="//h.bilibili.com" target="_blank" title="画友" class="text">画友</a>
                            </li>
                            <li class="music">
                                <a href="//www.bilibili.com/audio/home/?type=10" target="_blank" title="来探索bilibili音乐的世界吧~"
                                    class="text">音频</a>
                            </li>
                            <li class="game-center">
                                <a href="//game.bilibili.com " target="_blank " title="游戏中心 " class="text ">游戏中心</a>
                                <div class="game-center-menu">
                                    <div class="left">
                                        <div class="onest">
                                            <a href="https://game.bilibili.com/fgo/event_valentinesday2019/" target="_blank">
                                                <img src="img/fate.jpg" alt="命运-冠位指定（Fate/GO）" />
                                                <span class="onest-name">命运-冠位指定（Fate/GO）</span>
                                            </a>
                                        </div>
                                        <div class="twost">
                                            <a href="https://game.bilibili.com/szg/">
                                                <img src="img/timesing.png" alt="时之歌" />
                                                <span>时之歌</span>
                                            </a>
                                            <a href="https://www.bilibili.com/blackboard/activity-asksjtbyx.html">
                                                <img src="img/blueboat.png" alt="碧蓝航线" />
                                                <span>碧蓝航线</span>
                                            </a>
                                            <a href="https://game.bilibili.com/arkorder/">
                                                <img src="img/boatorder.png" alt="方舟指令" />
                                                <span>方舟指令</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="right">
                                        <div class="game-center-list">
                                            <a href="https://www.biligame.com/detail/?id=103012"
                                                target="_blank"><span>代号SSR</span></a>
                                            <a href="https://www.biligame.com/detail/?id=102924"
                                                target="_blank"><span>代号：灵</span></a>
                                            <a href="https://www.biligame.com/detail/?id=102971"
                                                target="_blank"><span>墨魂</span></a>
                                            <a href="https://game.bilibili.com/pcr/yuyue/"
                                                target="_blank"><span>公主连结Re:Dive</span></a>
                                            <a href="https://game.bilibili.com/magireco/" target="_blank"><span>魔法纪录
											魔法少女小圆外传</span></a>
                                            <a href="https://game.bilibili.com/dwbgx/" target="_blank"><span>大王不高兴</span></a>
                                            <a href="https://game.bilibili.com/bangdream/yuyue/" target="_blank"><span>BanG
											Dream！</span></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="live">
                                <a href="//live.bilibili.com" target="_blank" title="直播" class="text">直播</a>
                            </li>
                            <li class="buy">
                                <a href="//show.bilibili.com/platform/home.html?msource=pc_web" target="_blank" title="会员购"
                                    class="text">会员购</a>
                            </li>
                            <li class="download">
                                <a href="#" target="_blank" title="下载APP" class="text"><i
                                    style="font-family: icomoon;"></i>下载APP</a>
                                <div class="bin-menu">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="file fr">
                        <a class="tou">投稿</a>
                    </div>
                    <div class="top-right fr">
                        <ul class="fr">
                            <li class="top-item">
                                <a href="" class="text"></a>
                            </li>
                            <li class="top-item">
                                <a href="" class="text">大会员</a>
                            </li>
                            <li class="top-item">
                                <a href="" class="text">消息</a>
                            </li>
                            <li class="top-item">
                                <a href="" class="text">动态</a>
                            </li>
                            <li class="top-item top-aft">
                                <a href="" class="text">稍后再看</a>
                                <div class="aft-menu">
                                    <ul>
                                        <li><a href="" target="_blank" title="【剧情】小偷家族（2018）【是枝裕和/安藤樱/松冈茉优】">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                        </a></li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="" target="_blank" class="more">
                                            查看更多
									<i class="ico"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="top-item top-collect">
                                <a href="" class="text">收藏</a>
                                <div class="collect-menu">
                                    <ul>
                                        <li>
                                            <a href="" target="_blank" title="【剧情】小偷家族（2018）【是枝裕和/安藤樱/松冈茉优】">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="" target="_blank" class="more">
                                            查看更多
									<i class="ico"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="top-item top-history">
                                <a href="" class="text">历史</a>
                                <div class="history-menu">
                                    <ul>
                                        <li class="timeline">
                                            <span class="date">今日</span></li>
                                        <li><a href="" target="_blank" title="【剧情】小偷家族（2018）【是枝裕和/安藤樱/松冈茉优】">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                            <div class="infor"><span class="watched">100%</span><i class="pc"></i></div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                            <div class="infor"><span class="watched">10%</span><i class="pc"></i></div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                            <div class="infor"><span class="watched">1%</span><i class="pc"></i></div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                            <div class="infor"><span class="watched">100%</span><i class="pc"></i></div>
                                        </a></li>
                                        <li><a href="" target="_blank" title="">
                                            <div class="link">【剧情】小偷家族（2018）</div>
                                            <div class="infor"><span class="watched">10%</span><i class="pc"></i></div>
                                        </a></li>
                                        <li>
                                            <a href="" target="_blank" title="">
                                                <div class="link">【剧情】小偷家族（2018）</div>
                                                <div class="infor"><span class="watched">1%</span><i class="pc"></i></div>
                                            </a>
                                        </li>

                                    </ul>
                                    <div>
                                        <a href="" target="_blank" class="more">
                                            查看更多
									                     <i class="ico"></i>
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