import React, { Component } from 'react'
import MyHeader from '../Home/Header';
import { Link } from 'react-router-dom';
require("./Login.css")
// import style from './Login.module.css';
// console.log(style);
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            useriserr: false,
            pwiserr: false,
            usererrtips: '',
            pwerrtips: '',
            form: {
                username: '',
                password: '',
            }
        }
        this.Ukeyup = this.Ukeyup.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    Ukeyup(e) {
        if (e.target.id == 'login-username') {
            this.state.form.username ? this.setState({
                useriserr: false,
                usererrtips: ''
            }) : this.setState({
                useriserr: true,
                usererrtips: '请输入注册时用的邮箱或者手机号呀'
            });
        } else {
            this.state.form.password ? this.setState({
                pwiserr: false,
                pwerrtips: ''
            }) : this.setState({
                pwiserr: true,
                pwerrtips: '喵，你没输入密码么？'
            });
        }
        // console.log("up")
    }
    inputChange(e) {
        // console.log(e.target)
        e.target.id == 'login-username' ? this.setState({
            form: {
                username: e.target.value
            }
        }) : this.setState({
            form: {
                password: e.target.value
            }
        })
    }
    login(){
        console.log(this.state.form.username,this.state.form.password)
    }

    render() {
        return (
            <div>
                <MyHeader all='true' />

                <div style={{ height: '530px' }}>
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
                                            <input type="text" defaultValue={this.state.form.username} placeholder="你的手机号/邮箱" id="login-username" maxLength="50"
                                                autoComplete="off" onKeyUp={this.Ukeyup} onChange={this.inputChange} />
                                            <span className={["x", this.state.useriserr ? "err" : null].join(' ')}></span>
                                            <div className="prompt clearfix">
                                                <p className="tips">{this.state.usererrtips}</p>
                                            </div>
                                        </li>
                                        <li className="password box">
                                            <input type="password" defaultValue={this.state.form.password} placeholder="密码" id="login-password" onChange={this.inputChange} onKeyUp={this.Ukeyup} />
                                            <span className={["x", this.state.pwiserr ? "err" : null].join(' ')}></span>
                                            <div className="prompt clearfix">
                                                <p className="tips">{this.state.pwerrtips}</p>
                                            </div>
                                        </li>
                                        <li className="validation">

                                        </li>
                                        <li className="remember">
                                            <label htmlFor="">
                                                <input type="checkbox" />
                                                记住我
                                    <span>不是自己的电脑上不要勾选此项</span>
                                                <a href="" style={{ float: 'right' }}>忘记密码？</a>
                                                <a href="" style={{ marginRight: '10px', float: 'right' }}>无法验证？</a>
                                            </label>
                                        </li>
                                        <li className="button-box">
                                            <Link to={'/'} className="but in" onClick={this.login.bind(this)}>登录</Link>
                                            <Link to={'/create'} className="but ap">注册</Link>
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
            </div>
        )
    }
}
