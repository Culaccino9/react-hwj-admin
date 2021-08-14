import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { getUpdataShopsDataAction } from '../../store'

import moment from 'moment'
import {
    Drawer,
    Button,
    Form,
    Input,
    Select,
    InputNumber,
    TimePicker,
    Upload
} from 'antd'
import { LoadingOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons'
export default function WJShopsDrawer(props) {
    const { onClose, visible, shopsData } = props
    const [loading, setLoading] = useState(false)
    const [shopsImg, setShopsImg] = useState(shopsData.avatar)
    useEffect(()=>{
        setShopsImg(shopsData.avatar)
    },[shopsData.avatar])
    const fileList = shopsData.pics.map((item, index) => {
        return {
            uid: index,
            name: index,
            status: 'done',
            url: item,
            thumbUrl: item,
            response: {
                imgUrl: item.split("/")[item.split("/").length - 1]
            }
        }
    })
    const [shopsListImg, setShopsListImg] = useState(fileList)
    const dispatch = useDispatch()

    let formData = JSON.parse(JSON.stringify(shopsData))
    formData.date && formData.date.forEach((item, index) => {
        formData.date[index] = moment(item)
    })
    const [form] = Form.useForm()
    const { TextArea } = Input
    const { Option } = Select
    const formStting = {
        initialValues: formData,
        form,
        name: "shops",
        labelCol: { span: 3 },
        onFinish: value => {
            value.supports = JSON.stringify(shopsData.supports)
            value.sellCount = shopsData.sellCount;
            value.score = shopsData.score;
            value.id = shopsData.id
            value.pics = JSON.stringify(
                shopsListImg.map(item => {
                    return item.response.imgUrl
                })
            )
            // value.pics = '["1590480886706.webp","1590480889717.webp","1590482092433.webp"]'
            // value.avatar = "1590473180839.webp"
            value.avatar = shopsImg.split("/")[shopsImg.split("/").length - 1]
            value.date = JSON.stringify(value.date.map(item => {
                return moment(item).format("YYYY-MM-DD HH:mm:ss")
            }))
            // value.date= '[ "2018-02-03 18:56:03", "2020-06-10 09:15:00"]'
            dispatch(getUpdataShopsDataAction(value))
            onClose()
        }
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    const shopsImgChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            setShopsImg(`http://127.0.0.1:5000/upload/shop/${info.file.response.imgUrl}`)
            setLoading(false)
        }
    }

    const imgListUpdata = info => {
        setShopsListImg(info.fileList)
    }
    return (
        <Drawer
            width="800"
            title="修改店铺信息"
            placement="left"
            onClose={onClose}
            visible={visible}
            footer={
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button onClick={onClose} style={{ marginRight: 8 }}>
                        Cancel
                    </Button>
                    <Button onClick={() => form.submit()} type="primary">
                        Submit
                    </Button>
                </div>
            }
        >
            <Form {...formStting}>
                <Form.Item label="店铺图片">
                    <Upload
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        onChange={shopsImgChange}
                        action="http://localhost:5000/shop/upload"
                    >
                        {shopsImg || shopsData.avatar ? <img src={shopsImg ? shopsImg : shopsData.avatar} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
                    </Upload>
                </Form.Item>
                <Form.Item name="name" label="店铺名称">
                    <Input />
                </Form.Item>
                <Form.Item name="bulletin" label="店铺描述">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="菜品展示">
                    <Upload
                        action="http://127.0.0.1:5000/shop/upload"
                        listType="picture"
                        defaultFileList={[...fileList]}
                        onChange={imgListUpdata}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item name="description" label="专送">
                    <Select style={{ width: 140 }}>
                        <Option value="蜂鸟专送">蜂鸟专送</Option>
                        <Option value="逆风专送">逆风专送</Option>
                        <Option value="神风专送">神风专送</Option>
                        <Option value="大王专送">大王专送</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="deliveryTime" label="配送时间">
                    <InputNumber min={1} max={60} stringMode step="1.00" />
                </Form.Item>
                <Form.Item name="deliveryPrice" label="配送费">
                    <InputNumber min={1} max={1000} stringMode step="1.00" />
                </Form.Item>
                <Form.Item name="minPrice" label="起送价格">
                    <InputNumber min={1} max={1000} stringMode step="5.00" />
                </Form.Item>
                <Form.Item name="date" label="营业时间">
                    <TimePicker.RangePicker />
                </Form.Item>
            </Form>
        </Drawer>
    )
}
