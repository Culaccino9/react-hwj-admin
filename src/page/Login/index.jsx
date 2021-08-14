import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { getUserInfoAction, updataTokenAction } from '../User/store'

import { message } from 'antd'
import {
    UserOutlined,
    KeyOutlined
} from '@ant-design/icons'
import { LoginStyleWrapper } from './style'

import { checkLogin } from '@/services/login'
import { debounce_j } from "@/utils/debounce"
import loginImg from '@/assets/img/log.svg'
import loginCImg from '@/assets/img/register.svg'
export default memo(function WJLogin() {
    const [flag, setFlag] = useState(false)
    const [user, setUser] = useState({ account: "", password: "" })
    const history = useHistory()
    const dispatch = useDispatch()

    const changeEC = () => {
        setFlag(!flag)
        setUser({ account: "", password: "" })
    }
    const getUser = (e) => {
        switch (e.target.id) {
            case "user":
                return setUser(oldValue => ({ ...oldValue, account: e.target.value }))
            case "password":
                return setUser(oldValue => ({ ...oldValue, password: e.target.value }))
            default:
                return
        }
    }
    const doLogin = () => {
        !user.account && message.error('请输入用户名');
        !user.password && message.error('请输入密码');
        (user.account && user.password) && checkLogin(user).then(res => {
            res.data.code !== 0 && message.error(res.data.msg);
            if (res.data.code === 0) {
                sessionStorage.role = res.data.role
                sessionStorage.token = res.data.token
                // sessionStorage.isLogin = true
                sessionStorage.id = res.data.id
                dispatch(updataTokenAction(res.data.token))
                dispatch(getUserInfoAction({ id: res.data.id }))
                history.push("/home")
                message.success(res.data.msg)
            }
        })
        setUser({ account: "", password: "" })
    }
    const keyLogin = e =>{
        e.keyCode === 13 && debounce_j(doLogin)()
    }
    return (
        <LoginStyleWrapper>
            <div className={flag ? "container sign-up-mode" : "container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <div id="form" className="sign-in-form">
                            <h2 className="login-title">Sign in</h2>
                            <div className="input-field">
                                <UserOutlined className="icon" />
                                <input onChange={e => debounce_j(getUser(e))} type="user" id="user" value={user.account} placeholder="admin（super） || guest（normal）" />
                            </div>
                            <div className="input-field">
                                <KeyOutlined className="icon" />
                                <input disabled={flag} onKeyDown={e=>keyLogin(e)} onChange={e => debounce_j(getUser(e))} type="password" id="password" value={user.password} placeholder="Password same like account" className="input" />
                            </div>
                            <button disabled={flag} onClick={() => debounce_j(doLogin())} className="btn solid input" >Log in</button>
                            <p className="social-text">Enter your account number and log in to the backgounrd stystem.</p>
                        </div>
                        <div id="form" className="sign-up-form">
                            <h2 className="login-title">登录</h2>
                            <div className="input-field">
                                <UserOutlined className="icon" />
                                <input onChange={e => debounce_j(getUser(e))} type="user" id="user" value={user.account} placeholder="admin（超管） || guest（普通）" className="input" />
                            </div>
                            <div className="input-field">
                                <KeyOutlined className="icon" />
                                <input disabled={!flag} onKeyDown={e=>keyLogin(e)} onChange={e => debounce_j(getUser(e))} type="password" id="password" value={user.password} placeholder="密码同账号名" className="input" />
                            </div>
                            <button disabled={!flag} onClick={() => debounce_j(doLogin())} className="btn input" >登录</button>
                            <p className="social-text">输入您的账号并登录后台管理系统</p>
                        </div>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>welcome!</h3>
                            <p>
                                Whatever you're doing, keep on doing it.
                            </p>
                            <button className="btn transparent" id="sign-up-btn" onClick={e => changeEC()}>
                                去中文页面登录
                            </button>
                        </div>
                        <img src={loginImg} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>欢迎您！</h3>
                            <p>
                                无论行何事，恒心铸坚持。
                            </p>
                            <button className="btn transparent" id="sign-in-btn" onClick={e => changeEC()}>
                                Sign up to English
                            </button>
                        </div>
                        <img src={loginCImg} className="image" alt="" />
                    </div>
                </div>
            </div>
        </LoginStyleWrapper>
    )
})
