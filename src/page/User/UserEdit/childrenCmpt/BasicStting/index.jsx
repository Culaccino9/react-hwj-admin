import React from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {getUserInfoAction} from '../../../store'

import {
    Input,
    Form,
    Select,
    Cascader,
    Button,
    Avatar,
    Upload,
    message
} from 'antd'
import {UploadOutlined} from "@ant-design/icons"
import { BasicSttingDivStyle } from './style'
export default function WJBasicStting() {
    const {userInfo} = useSelector(state=>({
        userInfo:state.user.userInfo
    }),shallowEqual)

    const dispatch = useDispatch()
    const { TextArea } = Input
    const { Option } = Select
    const formData = {
        email:"test@163.com",
        name:"admin",
        aboutme:"这个人很懒，什么都没留下",
        nation:"中国",
        city:["重庆","渝中区"],
        adress:"你猜猜",
        phone:"18888888888",
        prefix:"86"
    }
    const cityOptions = [
        {
            value: '重庆',
            label: '重庆',
            children: [
                {
                    value: '渝中区',
                    label: '渝中区',
                },
                {
                    value: '江北区',
                    label: '江北区',
                },
            ],
        },
        {
            value: '成都',
            label: '成都',
            children: [
                {
                    value: '官渡区',
                    label: '官渡区',
                },
                {
                    value: '武侯区',
                    label: '武侯区',
                },
            ],
        },
    ];
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
          <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
      const props = {
        name: 'file',
        action: 'http://localhost:5000/users/avatar_upload',
        maxCount: 1,
        data: { id: userInfo.id },
        onChange(info) {
          if (info.file.status === 'done') {
            dispatch(getUserInfoAction({ id: userInfo.id }))
            message.success(`${info.file.name} file uploaded successfully`);
          } 
          info.file.status === 'error' && message.error(`${info.file.name} file upload failed.`);
        },
      };
    return (
        <>
            <h2>基本设置</h2>
            <BasicSttingDivStyle>
                <Form initialValues={formData} layout="vertical" className="basicestting-form">
                    <Form.Item name="email" label="邮箱" style={{ width: "70%" }}>
                        <Input allowClear placeholder="请输入邮箱" />
                    </Form.Item>
                    <Form.Item name="name" label="昵称" style={{ width: "70%" }}>
                        <Input allowClear placeholder="请输入昵称" />
                    </Form.Item>
                    <Form.Item name="aboutme" label="个人简介" style={{ width: "100%" }}>
                        <TextArea placeholder="个人简介" rows={4} allowClear />
                    </Form.Item>
                    <Form.Item name="nation" label="国家/地区" style={{ width: "40%" }}>
                        <Select allowClear placeholder="请选择国家地区">
                            <Option value="中国">中国</Option>
                            <Option value="中国">中国</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="city" label="所在省市" style={{ width: "40%" }}>
                        <Cascader options={cityOptions} placeholder="请选择省市" />
                    </Form.Item>
                    <Form.Item name="adress" label="街道地址" style={{ width: "70%" }}>
                        <Input allowClear placeholder="请输入街道地址" />
                    </Form.Item>
                    <Form.Item name="phone" label="联系电话" style={{ width: "60%" }}>
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Form.Item>
                </Form>
                <div className="basicstting-userimg">
                    <p className="userimg-title">头像</p>
                    <div className="userimg-loading">
                        <Avatar size={140} src={userInfo.imgUrl} style={{marginBottom:"20px"}}/>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>上传头像</Button>
                        </Upload>
                    </div>
                </div>
            </BasicSttingDivStyle>
        </>
    )
}
