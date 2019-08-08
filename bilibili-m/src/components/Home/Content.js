import React, { Component } from 'react';
import { Carousel } from 'antd'
require('./Content.css')

class Content extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="index__divider__src-home-"></div>

                <div className="index__banner__src-home-slider-">
                    <Carousel autoplay>
                        {/* autoplay */}
                        <div>
                            <a href="https://www.bilibili.com/read/cv2160791" data-index="0">
                                <img src={require('../../images/lun1.jpg@480w_300h.webp')} data-index="0" alt="开脑洞，赢大奖，一起狂爱造起来" />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.bilibili.com/read/cv2145403" data-index="1">
                                <img src={require('../../images/lun2.jpg@480w_300h.webp')} data-index="1" alt="揭秘世界上最全能的车（滑稽）" />
                            </a>
                        </div>

                        <div>
                            <a href="https://www.bilibili.com/blackboard/activity-_DVvliLMj.html" data-index="2">
                                <img src={require('../../images/lun3.jpg@480w_300h.webp')} data-index="2" alt="巴适得板~一大波川菜袭来！" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.bilibili.com/read/cv2165259" data-index="3">
                                <img src={require('../../images/lun4.jpg@480w_300h.webp')} data-index="3" alt="你想长生不老吗？" />
                            </a>
                        </div>
                    </Carousel>
                </div>
                <div className="index__rankingFlow__src-home-rankingFlowNormal-" id="rankingFlowNormal">
                    <div className="index__content__src-home-rankingFlowNormal-">
                        <div id="video_0" className=" report-scroll-module report-wrap-module" scrollshow="true">
                            <a className="index__item__src-commonComponent-Item-" href="/video/av62026826.html">
                                <div className="index__imgContainer__src-commonComponent-Item-">
                                    <img src={require('../../images/tv.png')}
                                        className="index__tv__src-commonComponent-Item-" alt="" />
                                    <img src={require('../../images/video1.jpg@320w_200h.webp')}
                                        alt="" className="index__normal__src-commonComponent-Item-" />
                                    <div className="index__info__src-commonComponent-Item-">
                                        <div className="index__playIcon__src-commonComponent-Item-">
                                            <svg className="index__icon__src-commonComponent-Item-" aria-hidden="true">
                                                <use href="#icon-bofangshu"></use>
                                            </svg></div>
                                        <div className="index__play__src-commonComponent-Item-">
                                            <p>1189.0万</p>
                                        </div>
                                        <div className="index__danmuIcon__src-commonComponent-Item-">
                                            <svg className="index__icon__src-commonComponent-Item-" aria-hidden="true">
                                                <use href="#icon-danmushu"></use>
                                            </svg></div>
                                        <div className="index__view__src-commonComponent-Item-">
                                            <p>17.6万</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="index__title__src-commonComponent-Item-">
                                    <p>我被告知跟我22年的名字我不能用要我改名！我如何维权的！</p>
                                </div>
                            </a>
                        </div>
                        <div id="video_1" className=" report-scroll-module report-wrap-module" scrollshow="true">
                            <a className="index__item__src-commonComponent-Item-" href="/video/av61850079.html">
                                <div className="index__imgContainer__src-commonComponent-Item-">
                                    <img src={require('../../images/tv.png')}
                                        className="index__tv__src-commonComponent-Item-" alt="" />
                                    <img src={require('../../images/video2.jpg@320w_200h.webp')}
                                        alt="" className="index__normal__src-commonComponent-Item-" />
                                    <div className="index__info__src-commonComponent-Item-">
                                        <div className="index__playIcon__src-commonComponent-Item-">
                                            <svg className="index__icon__src-commonComponent-Item-" aria-hidden="true">
                                                <use href="#icon-bofangshu"></use>
                                            </svg></div>
                                        <div className="index__play__src-commonComponent-Item-">
                                            <p>313.6万</p>
                                        </div>
                                        <div className="index__danmuIcon__src-commonComponent-Item-">
                                            <svg className="index__icon__src-commonComponent-Item-" aria-hidden="true">

                                                <use href="#icon-danmushu"></use>
                                            </svg></div>
                                        <div className="index__view__src-commonComponent-Item-">
                                            <p>3.7万</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="index__title__src-commonComponent-Item-">
                                    <p>人可以恶心到什么程度 曝光：恶魔真的就在你身边</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;