import React, { Component } from 'react'
require('./Login.module.css')
// import style from './Login.module.css';
// console.log(style);
export default class Login extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    Ukeyup(){
        console.log("up")
    }
    ipuutChange(){
        console.log("ipuutChange")
    }
    render() {
        return (
            <div style={{height: '530px'}}>
                <div className="lg-top">
                    <img src={require("../../images/lg-top.png")} alt="" />
                </div>
                <div className="lg-tittle">
                    <span className="tit">登录</span>
                </div>
                <div className="lg-box clearfix">
                    <div className="lg-l">
                        <div className="lg-ll">
                            <div className="bin">
                                <i className="ico"></i>
                                <div className="bin-box">
                                    <img src={require("../../images/lg-ma.png")} alt="" />
                                </div>
                            </div>
                            <div className="lg-l-footer">
                                <p className="txt">扫描二维码登录</p>
                                <p className="app">
                                    请使用
                            <a href="">哔哩哔哩客户端</a>
                                    <br />
                                    扫码登录
                            <br />
                                    或扫码下载APP
                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg-r">
                        <div className="lg-form">
                            <div className="input-box">
                                <ul>
                                    <li className="username box">
                                        <input type="text" value="" placeholder="你的手机号/邮箱" id="login-username" maxLength="50"
                                            autoComplete="off" onKeyUp={this.Ukeyup} onChange={this.ipuutChange} />
                                        <span className="x"></span>
                                        <div className="prompt clearfix">
                                            <p className="tips"></p>
                                        </div>
                                    </li>
                                    <li className="password box">
                                        <input type="password" placeholder="密码" id="login-password" onKeyUp={this.Ukeyup} />
                                        <span className="x"></span>
                                        <div className="prompt clearfix">
                                            <p className="tips"></p>
                                        </div>
                                    </li>
                                    <li className="validation">

                                    </li>
                                    <li className="remember">
                                        <label htmlFor="">
                                            <input type="checkbox" />
                                            记住我
                                    <span>不是自己的电脑上不要勾选此项</span>
                                            <a href="" style={{float:'right'}}>忘记密码？</a>
                                            <a href="" style={{marginRight:'10px',float:'right'}}>无法验证？</a>
                                        </label>
                                    </li>
                                    <li className="button-box">
                                        <a href="" className="but in">登录</a>
                                        <a href="" className="but ap">注册</a>
                                    </li>
                                    <li className="link">
                                        <a href="" className="weibo">微博账号登录</a>
                                        <a href="" className="qq">QQ账号登录</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
