import React, { memo } from 'react'

import { shallowEqual, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    checkoldpwd,
    editpwd
} from '@/services/account'

import {
    Button,
    Form,
    Input,
    message
} from 'antd'
import { AccountEditDivStyle } from './style'
export default memo(function WJAccountEdit() {
    const [form] = Form.useForm()
    const { id } = useSelector(state => ({
        id: state.user.userInfo.id
    }), shallowEqual)
    const history = useHistory()
    const formStting = {
        form,
        name: "accountEdit",
        labelCol: { span: 6 },
        labelAlign: "left",
        onFinish: value => {
            const params = {
                id,
                newPwd:value.newPwd
            }
            editpwd(params).then(res=>{
                if(res.data.code === 0){
                    message.success("修改密码成功，即将退出，请重新登录")
                    setTimeout(()=>{
                        history.push("/login")
                        sessionStorage.clear()
                    },2000)
                }
            })
        }
    }
    const formItem = [
        {
            key: 1,
            label: "旧密码",
            name: "oldPwd",
            rules: [
                {
                    required: true,
                    validator: (rules, value, callback) => {
                        const params = {
                            oldPwd:value,
                            id
                        }
                        checkoldpwd(params).then(res => {
                            console.log(res.data);
                            (res.data.code === 0 && callback()) || callback(new Error('请输入正确的密码'))
                        })
                    },
                },
            ],
            validateTrigger: 'onBlur'
        },
        {
            key: 2,
            label: "新密码",
            name: "newPwd",
            rules: [
                { required: true, message: "新密码不能为空" },
            ]
        },
        {
            key: 3,
            label: "确认密码",
            name: "surePwd",
            rules: [
                { required: true, message: "确认密码不能为空", validateTrigger: "onFinish" },
                {
                    validator: (_, value, callback) => {
                        (value === form.getFieldValue("newPwd") && callback()) || callback(new Error('两次输入不一致，请确认密码'))
                    }
                }
            ]
        },
    ]
    return (
        <AccountEditDivStyle>
            <h2>修改密码</h2>
            <Form {...formStting} className="accountedit-form">
                {
                    formItem.map(item => {
                        return (
                            <Form.Item {...item}>
                                <Input.Password />
                            </Form.Item>
                        )
                    })
                }
                <div className="accountedit-btn">
                    <Button onClick={() => form.resetFields()}>重置</Button>
                    <Button htmlType="submit" type="primary" style={{ marginLeft: "10px" }}>确认</Button>
                </div>
            </Form>
        </AccountEditDivStyle>
    )
})
