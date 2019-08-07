import React, { Component } from 'react';
import { Icon, Tabs } from 'antd';
require('./TopNav.css')

const { TabPane } = Tabs;
const tabs = ['首页', '动画', '番剧', '国创', '音乐', '舞蹈', '科技', '数码', '游戏',
    '娱乐', '鬼畜', '电影', '电视剧', '纪录片', '影视', '时尚', '生活', '广告', '直播', '相簿'];

function callback(key) {
    console.log(key);
}

class TopNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ls: false
        }
        this.openList = this.openList.bind(this);
    }


    openList() {
        this.setState({
            ls: !this.state.ls
        })
    }
    render() {
        return (
            <div>
                <div className="index__partBox__src-home-zoneAll- index__show__src-home-zoneAll-" style={{ display: this.state.ls ? "block" : "none" }}>
                    <div className="index__pagesContainer__src-home-zoneAll-" id="scrollZoneAll">
                        {tabs.map((item, index) => (
                            <a className="index__tab__src-home-zoneAll-tab-  index__test__src-home-zoneAll-tab-" href="/channel/1113.html" key={index}>
                                <p>{item}</p>
                            </a>
                        ))}
                        {[...Array(4).keys()].map(i => (
                            <a className="index__tab__src-home-zoneAll-tab-  index__test__src-home-zoneAll-tab-" href="/channel/1113.html" key={i}>
                                <p></p>
                            </a>
                        ))}
                    </div>

                    <div className="index__switchContainer__src-home-zoneAll-" onClick={this.openList}>
                        <svg className="index__icon__src-home-zoneAll-" aria-hidden="true">
                            <use href="#icon-shouqixiao"></use>
                        </svg>
                        <Icon type="up" />
                    </div>
                </div>
                <div className="index__partBox__src-home-zone-">
                    <div className="index__pagesContainer__src-home-zone-">
                        <Tabs defaultActiveKey="1" onChange={callback} className="index__scrollContainer__src-home-zone-">
                            {tabs.map((item, index) => (
                                <TabPane tab={item} key={index + 1}>
                                </TabPane>
                            ))}
                            {/* <TabPane tab="首页" key="1"></TabPane> */}
                        </Tabs>
                    </div>
                    <div className="index__switchContainer__src-home-zone-">
                        <Icon className="index__icon__src-home-zone-" type="down" onClick={this.openList} />
                    </div>
                </div>

            </div>

        );
    }
}

export default TopNav;