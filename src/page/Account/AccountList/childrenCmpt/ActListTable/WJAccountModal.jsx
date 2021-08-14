import React from 'react'
import { useDispatch } from 'react-redux'

import { getEditAccountListAction } from '../../../store' 
import {
    Modal,
    Form,
    Input,
    Select
} from 'antd'
export default function WJAccountModal(props) {
    const { isModalVisible, handleOk, handleCancel, initialValues } = props
    const { Option } = Select
    const disptach = useDispatch()
    const modalStting = {
        title: "修改账号",
        visible: isModalVisible,
        onOk: handleOk,
        onCancel: handleCancel,
        destroyOnClose: true,
        okButtonProps: { htmlType: 'submit', form: 'editData' },
    }
    const formStting = {
        name: "editData",
        labelCol: { span: 4 },
        style: { padding: "0 40px" },
        initialValues,
        onFinish: value => {
            value.id = initialValues.id
            disptach(getEditAccountListAction(value))
            // console.log(value);
        }
    }
    const iptConfig = {
        rules: [
            {
                required: true,
                message: '修改信息不能为空!',
            },
        ],
    }
    return (
        <Modal {...modalStting}>
            <Form {...formStting}>
                <Form.Item name="account" label="账号" {...iptConfig}>
                    <Input />
                </Form.Item>
                <Form.Item name="userGroup" label="用户组" {...iptConfig}>
                    <Select style={{ width: "50%" }}>
                        <Option value="普通管理员">普通管理员</Option>
                        <Option value="超级管理员">超级管理员</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
}
