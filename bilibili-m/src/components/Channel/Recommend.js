import React, { Component } from 'react';
require('./all.css');

class Recommend extends Component {
    state = {}
    render() {
        return (
            <div class="index__recommend__src-partition-recommend-">
                <div class="index__title__src-partition-recommend-">
                    <p>热门推荐</p>
                </div>
                <a class="index__rank__src-partition-recommend-" href="/ranking.html?tid=1">
                    <svg class="index__icon__src-partition-recommend- index__fill__src-partition-recommend-" aria-hidden="true">
                        <use href="#icon-paihangbang1"></use></svg><div class="index__words__src-partition-recommend-">
                        <p>排行榜</p>
                    </div>
                    <div class="index__arrow__src-partition-recommend-">
                        <svg class="index__icon__src-partition-recommend-" aria-hidden="true">
                            <use href="#icon-gengduo"></use>
                        </svg>
                    </div>
                </a>
                <div class="index__content__src-partition-recommend-">
                    <a class="index__item__src-commonComponent-Item-" href="/video/av61851244.html">
                        <div class="index__imgContainer__src-commonComponent-Item-">
                            <img src="//s1.hdslb.com/bfs/static/mult/images/tv.png" class="index__tv__src-commonComponent-Item-" alt="" />
                            <img src="//i0.hdslb.com/bfs/archive/d2479d6afda5d73a500c4c23603cf69b4b0ae83d.jpg@320w_200h.webp" alt="史诗级大雷片！口碑最差造就B站最强！阅烂片无数的up主都看傻了！" class="index__normal__src-commonComponent-Item-" />
                            <div class="index__info__src-commonComponent-Item-">
                                <div class="index__playIcon__src-commonComponent-Item-">
                                    <svg class="index__icon__src-commonComponent-Item-" aria-hidden="true">
                                        <use href="#icon-bofangshu"></use>
                                    </svg>
                                </div>
                                <div class="index__play__src-commonComponent-Item-">
                                    <p>221.9万</p>
                                </div>
                                <div class="index__danmuIcon__src-commonComponent-Item-">
                                    <svg class="index__icon__src-commonComponent-Item-" aria-hidden="true">
                                        <use href="#icon-danmushu"></use>
                                    </svg>
                                </div>
                                <div class="index__view__src-commonComponent-Item-">
                                    <p>3.0万</p></div></div></div><div class="index__title__src-commonComponent-Item-">
                            <p>史诗级大雷片！口碑最差造就B站最强！阅烂片无数的up主都看傻了！</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Recommend;