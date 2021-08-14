import React from 'react'

import { useDispatch } from 'react-redux'
import { addCateListAction } from '../../../store'

import {
    Modal,
    Form,
    Input,
    Switch,
} from 'antd'

export default function WJGoodsTypeModal(props) {
    const { modalVisible, setModalVisibel } = props

    const dispatch = useDispatch()

    const modalSetting = {
        title: "添加分类",
        visible: modalVisible,
        onCancel: () => setModalVisibel(false),
        destroyOnClose: true,
        okButtonProps: { htmlType: 'submit', form: 'addType' },
    }
    const formSetting = {
        name: "addType",
        style: { padding: "0 40px" },
        initialValues: { state: true },
        onFinish: value => {
            dispatch(addCateListAction(value))
            setModalVisibel(false)
        }
    }
    return (
        <Modal {...modalSetting}>
            <Form {...formSetting}>
                <Form.Item label="商品名称" name="cateName" rules={[{ required: true, message: '请填写商品名称！' }]}>
                    <Input placeholder="请输入商品名称" />
                </Form.Item>
                <Form.Item label="是否启用" name="state">
                    <Switch defaultChecked />
                </Form.Item>
            </Form>
        </Modal>
    )
}
