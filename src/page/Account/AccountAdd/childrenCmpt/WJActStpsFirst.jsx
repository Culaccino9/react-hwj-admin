import React from 'react'

import {
    Button, 
    Form, 
    Input,
    Select
} from 'antd'
export default function WJActStpsFirst({ next, setAddForm, addForm }) {
    const [form] = Form.useForm()
    const {Option} = Select
    const formStting = {
        name: "accountAdd",
        initialValues: addForm,
        labelCol: { span: 6 },
        labelAlign: "left",
        style: { width: "100%" },
        form,
        onFinish: (value) => {
            setAddForm(value)
            next()
        },
    }
    const formIpt = [
        {
            name: "account",
            label: "账号",
            key: 1,
            rules: [{ required: true, message: '请输入账号!' }]
        },
        {
            name: "password",
            label: "密码",
            key: 2,
            type: "password",
            rules: [{ required: true, message: '请输入密码!' }]
        },
        {
            name: "surePassword",
            label: "确认密码",
            key: 3,
            rules: [
                { required: true, message: '请重复密码',validateTrigger: "onFinish" },
                {
                    validator: (_, value, callback) => {
                        (value === form.getFieldValue("password") && callback()) || callback(new Error('两次输入不一致，请确认密码'))
                    }
                }
            ]
        },
    ]
    return (
        <>
            <Form {...formStting}>
                {
                    formIpt.map(ipt => {
                        return (
                            <Form.Item {...ipt}>
                                {ipt.name === 'account' ? <Input /> : <Input.Password />}
                            </Form.Item>
                        )
                    })
                }
                <Form.Item name="userGroup" label="用户组" rules={[{ required: true, message: '请选择管理组!' }]}>
                    <Select>
                        <Option value="超级管理员">超级管理员</Option>
                        <Option value="普通管理员">普通管理员</Option>
                    </Select>
                </Form.Item>
                <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                    <Button htmlType="submit" type="primary">下一步</Button>
                </div>
            </Form>
        </>
    )
}
