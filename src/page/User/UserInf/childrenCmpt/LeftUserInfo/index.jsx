import React from 'react'
import { useSelector } from 'react-redux'

import {
    Avatar,
    Divider,
    Tag
} from 'antd'
import {
    HomeOutlined,
    ApartmentOutlined,
    ContactsOutlined,
    FacebookOutlined,
    YoutubeOutlined,
    TwitterOutlined
} from '@ant-design/icons'
import WJButton from '@/components/WJButton'
import { LeftDivStyled } from './style'
export default function WJLeftUserInfo() {
    const { userInfo } = useSelector(state => ({
        userInfo: state.user.userInfo
    }))
    return (
        <LeftDivStyled>
            <Avatar size={100} src={userInfo.imgUrl} />
            <h1 className="userinfo-name">{userInfo.account}</h1>
            <p>海纳百川，有容乃大</p>
            <div className="userinfo-info">
                <p><ContactsOutlined />&emsp;集团CEO</p>
                <p><ApartmentOutlined />&emsp;云上餐厅 - 某某CEO - 某某人</p>
                <p><HomeOutlined />&emsp;重庆市渝中区</p>
            </div>
            <Divider dashed />
            <div className="userinfo-tag">
                <h3 className="tag-title">标签</h3>
                <div className="tag-tagst">
                    <Tag>重庆彭于晏</Tag>
                    <Tag>有颜还考实力</Tag>
                    <Tag>老板666</Tag>
                    <Tag>嘿嘿</Tag>
                    <Tag>喜欢追剧</Tag>
                    <Tag>很有想法的</Tag>
                </div>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                    Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                    Facebook
                </Tag>
                <Tag icon={<TwitterOutlined />} color="#55acee">
                    Twitter
                </Tag>
            </div>
            <Divider dashed />
            <WJButton/>
        </LeftDivStyled>
    )
}
