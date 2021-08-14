import React, { memo, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'

import {getOrderListAction} from '../store'
import { edit } from '@/services/order'
import { format } from 'moment'

import { Modal, Form, Input, DatePicker, Select, message } from 'antd'
import moment from 'moment'

export default memo(function WJOrderTableModal(props) {
    const { Option } = Select
    const { visible, confirmLoading, handleCancel, handleOk, modalData } = props
    const formItemTile = [["phone", "手机号"], ["consignee", "收货人"], ["deliverAddress", "配送地址"], ["remarks", "备注"]]
    const [editData, setEditData] = useState()
    const disptach = useDispatch()
    useEffect(() => {
        let data = JSON.parse(JSON.stringify(modalData))
        data.orderTime = moment(data.orderTime)
        data.deliveryTime = moment(data.deliveryTime)
        setEditData(data)
    }, [modalData])

    const iptConfig = {
        rules: [
            { required: true, message: "修改信息不能为空!" }
        ]
    }
    const dataConfig = {
        rules: [
            {
                type: 'object',
                required: true,
                message: '修改信息不能为空!',
            },
        ],
    };
    const onFinish = value => {
        let flag = false
        for (let i in value) {
            if (i === "deliveryTime" || i === "orderTime") {
                let editDataTime = moment(editData[i]).format("YYYY-MM-DD")
                // let editDataTime = moment(editData[i]).format("YYYY-MM-DD")
                // let oldDataTime = moment(value[i]).format("YYYY-MM-DD")
                let oldDataTime = moment(value[i]).format("YYYY-MM-DD")
                if (editDataTime !== oldDataTime) flag = true
            } else {
                if (value[i] !== editData[i]) flag = true
            }
        }
        !flag && message.error('您未做任何修改');
        if (flag) {
            value.deliveryTime = format(value.deliveryTime._d.toString(), "yyyy-MM-dd hh:mm:ss")
            value.orderTime = format(value.orderTime._d.toString(), "yyyy-MM-dd hh:mm:ss")
            value.id = modalData.id
            value.orderAmount= modalData.orderAmount
            edit(value).then(res => {
                if(res.data.code === 0){
                    disptach(getOrderListAction())
                    handleOk()
                    message.success(res.data.msg)
                }
            })
            
        }
    }
    return (
        <Modal
            title="修改此订单"
            width={800}
            visible={visible}
            maskClosable={false}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            okButtonProps={{ htmlType: 'submit', form: 'editData' }}
            destroyOnClose
        >
            <Form id="editData" name="editData"
                labelCol={{ span: 4, offset: 1 }} style={{ padding: "10px 100px" }}
                initialValues={editData} onFinish={onFinish}
            >
                <Form.Item
                    name='orderNo'
                    label="订单号"
                    {...iptConfig}
                >
                    <Input disabled />
                </Form.Item>
                {
                    formItemTile.map(item => {
                        return (
                            <Form.Item
                                name={item[0]}
                                label={item[1]}
                                {...iptConfig}
                                key={item[0]}
                            >
                                <Input />
                            </Form.Item>
                        )
                    })
                }
                <Form.Item name="orderTime" label="下单时间" {...dataConfig}>
                    <DatePicker format="YYYY-MM-DD" style={{ width: 200 }} />
                </Form.Item>
                <Form.Item name="deliveryTime" label="送达时间" {...dataConfig}>
                    <DatePicker format="YYYY-MM-DD" style={{ width: 200 }} />
                </Form.Item>
                <Form.Item name="orderState" label="订单状态" {...iptConfig}>
                    <Select allowClear style={{ width: 200 }}>
                        <Option value="已受理">已受理</Option>
                        <Option value="派送中">派送中</Option>
                        <Option value="已完成">已完成</Option>
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    )
})
