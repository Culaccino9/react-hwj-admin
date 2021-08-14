import React, { memo } from 'react'

import { useDispatch } from 'react-redux'
import {getOrderListAction} from '../store'

import { Button, Form, Input, Select, DatePicker  } from 'antd'
import moment from "moment"
export default memo(function WJOrderSearch() {
    const dispatch = useDispatch()

    const iptArr = [["订单号", "orderNo"], ["收货人", "consignee"], ["手机号", "phone"]]
    const [form] = Form.useForm();
    const { Option } = Select
    const {RangePicker} = DatePicker 
    const doRest = () => {
        form.resetFields();
    }
    const onFinish = (values) => {
        values.date && values.date.forEach((item,index)=>{
            values.date[index] = moment(item).format("YYYY-MM-DD hh:mm:ss")
        })
        dispatch(getOrderListAction(values))
    };
    return (
        <Form
            labelCol={{ span: 8 }}
            layout="inline"
            onFinish={onFinish}
            form={form}
            name="searchOrder"
            style={{ background: "#fff", padding: "20px", marginBottom: "20px" }}
        >
            {
                iptArr.map((item, index) => {
                    return (
                        <Form.Item key={index} label={item[0]} name={item[1]} style={{ width: 300, marginBottom: "20px", marginRight: "30px" }}>
                            <Input />
                        </Form.Item>
                    )
                })
            }
            <Form.Item label="订单状态" name="orderState" style={{ width: 300 }}>
                <Select placeholder="请选择下单时间" allowClear>
                    <Option value="已受理">已受理</Option>
                    <Option value="派送中">派送中</Option>
                    <Option value="已完成">已完成</Option>
                </Select>
            </Form.Item>
            <Form.Item label="选择时间" name="date" >
                <RangePicker format="YYYY-MM-DD" style={{ width: 400 }}/>
            </Form.Item>
            <Form.Item>
                <Button onClick={doRest} htmlType="button" style={{ margin: "0 10px" }}>重置</Button>
                <Button type="primary" htmlType="submit">查询</Button>
            </Form.Item>
        </Form>
    )
})
