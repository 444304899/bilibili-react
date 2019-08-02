import React, { Component } from 'react';
require('./Footer.css');
export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="footer">
                <div className="w" style={{ paddingTop: "40px", paddingBottom: "110px!important" }}>
                    <ul className="footer-list">
                        <li>
                            <div className="list-tit">bilibili</div>
                            <div className="tips"><a href="#">关于我们</a></div>
                            <div className="tips"><a href="#">联系我们</a></div>
                            <div className="tips"><a href="#">加入我们</a></div>
                            <div className="tips"><a href="#">友情链接</a></div>
                            <div className="tips"><a href="#">bilibili认证</a></div>
                            <div className="tips"><a href="#">Investor Relations</a></div>
                        </li>
                        <li>
                            <div className="list-tit">bilibili</div>
                            <div className="tips"><a href="#">帮助中心</a></div>
                            <div className="tips"><a href="#">高级弹幕</a></div>
                            <div className="tips"><a href="#">活动专题页</a></div>
                            <div className="tips"><a href="#">侵权申诉</a></div>
                            <div className="tips"><a href="#">活动中心</a></div>
                            <div className="tips"><a href="#">用户反馈论坛</a></div>
                            <div className="tips"><a href="#">壁纸站</a></div>
                            <div className="tips"><a href="#">名人堂</a></div>
                            <div className="tips"><a href="#">专车号服务中心</a></div>
                        </li>
                        <li>
                            <div className="footer-list-right">
                                <a href="#" target="_blank">
                                    <div className="phone">
                                        <div className="picture"></div>
                                        <em>客户端下载</em>
                                        <div className="qrcode-box-wrp">
                                            <div className="qrcode-box qrcode-app">
                                                <div className="qrcode-box-arrow">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" target="_blank">
                                    <div className="weibo">
                                        <div className="picture"></div>
                                        <em>新浪微博</em>
                                        <div className="qrcode-box-wrp"><div className="qrcode-box qrcode-weibo"><div className="qrcode-box-arrow"></div></div></div>
                                    </div>
                                </a>
                                <a href="#" target="_blank">
                                    <div className="weixin">
                                        <div className="picture"></div>
                                        <em>官方微信</em>
                                        <div className="qrcode-box-wrp bigvip-qrcode"><div className="qrcode-box qrcode-weixin"><div className="qrcode-box-arrow"></div></div></div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div className="footer-foot">
                        <div className="footer-foot-l fl" style={{ paddingTop: "0px" }}>
                            <div className="lp"></div>
                        </div>
                        <div className="footer-foot-l" style={{ margin: '0px 68px 0 115px', lineHeight: '24px', float: 'none' }}>
                            <p>
                                广播电视节目制作经营许可证：
						<span>（沪）字第1248号</span>
                                | 网络文化经营许可证：
						<span>沪网文[2016]2296-134号</span>
                                | 信息网络传播视听节目许可证：
						<span>0910417</span>
                                | 互联网ICP备案：
						<a href="http://www.miitbeian.gov.cn/" target="_blank">沪ICP备13002172号-3</a>
                                沪ICP证：
						<span>沪B2-20100043</span>
                                | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3
                                |
						<a href="#">营业执照</a>
                            </p>
                            <p>
                                <a href="#" target="_blank">
                                    <i className="foot-ico"></i>
                                    <span>上海互联网举报中心</span>
                                </a>
                                |
						<a href="http://jb.ccm.gov.cn/" target="_blank">12318 全国文化市场举报网站</a>
                                |
						<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011002002436"
                                    target="_blank">
                                    <img src={require("../../images/beiantubiao.png")} alt="" style={{ verticalAlign: 'top' }} />
                                    沪公网安备 31011002002436号 |
						</a>
                                <a href="mailto:userreport@bilibili.com">儿童色情信息举报专区</a>
                            </p>
                            <p>
                                <a href="http://report.12377.cn:13225/toreportinputNormal_anis.do" target="_blank">
                                    网上有害信息举报专区：
							<img src={require("../../images/12377.png")} alt="" width="16" height="16" style={{ verticalAlign: 'sub' }} />
                                    中国互联网违法和不良信息举报中心
						</a>
                            </p>
                            <p>公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
