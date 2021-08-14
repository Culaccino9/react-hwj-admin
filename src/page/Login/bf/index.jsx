import React, { memo, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { getUserInfoAction, updataTokenAction } from '../../User/store'

import { message } from 'antd'
import { LoginDivStyle } from './style'

import { checkLogin } from '@/services/login'
import { debounce_j } from "@/utils/debounce"
export default memo(function WJLogin() {
    const [user, setUser] = useState({ account: "", password: "" })
    const history = useHistory()
    const dispatch = useDispatch()


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
                dispatch(getUserInfoAction({ id: res.data.id }))
                dispatch(updataTokenAction(res.data.token))
                history.push("/home")
                message.success(res.data.msg)
            }
        })
        setUser({ account: "", password: "" })
    }

    return (
        <LoginDivStyle>
            <div className="shell">
                <div className="box-left">
                    <h2>Login</h2>
                    <span>Just log in, you can enjoy more services, interact with me here, and publish your opinions</span>
                </div>
                <div className="box-right">
                    <div className="form">
                        <label htmlFor="user">User</label>
                        <input onChange={e => debounce_j(getUser(e))} type="user" id="user" value={user.account}></input>
                        <label htmlFor="password">Password</label>
                        <input onChange={e => debounce_j(getUser(e))} type="password" id="password" value={user.password}></input>
                        <input onClick={() => debounce_j(doLogin())} type="submit" id="submit" value="登录"></input>
                    </div>
                </div>
            </div>
        </LoginDivStyle>
    )
})
