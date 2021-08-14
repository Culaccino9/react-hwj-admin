import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getShopsDataAction } from './store'

import {
    Avatar,
    Breadcrumb,
    Button,
    Rate
} from 'antd'
import {
    ShopsDivStyle,
} from './style'
import WJShopsMainLeft from './childrenCmpt/ShopsMainLeft'
import WJShopsMainRight from './childrenCmpt/ShopsMainRight'
import WJShopsDrawer from './childrenCmpt/ShopsDrawer'
export default memo(function WJShops() {
    const dispatch = useDispatch()
    const { shopsData } = useSelector(state => ({
        shopsData: state.shops.shopsData
    }))
    useEffect(() => {
        dispatch(getShopsDataAction())
    }, [dispatch])
    const [visible, setVisible] = useState(false)
    const showDrawer = () => {
        setVisible(true)
    };
    const onClose = () => {
        setVisible(false)
    };
    return (
        <ShopsDivStyle>
            <div className="shops-header">
                <div className="header-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb.Item>店铺管理</Breadcrumb.Item>
                        <Breadcrumb.Item>我的店铺</Breadcrumb.Item>
                    </Breadcrumb>
                    <Button onClick={showDrawer}>修改店铺信息</Button>
                </div>
                <div className="header-info">
                    <Avatar size={100} src={shopsData && shopsData.avatar} />
                    <div className="info-name">
                        <h2>{shopsData && shopsData.name}</h2>
                        <p>{shopsData && shopsData.bulletin}</p>
                    </div>
                    <div className="info-score">
                        <h5>评价</h5>
                        <Rate disabled allowHalf defaultValue={4.5 || shopsData.score} />
                    </div>
                </div>
            </div>
            <div className="shops-main">
                <WJShopsMainLeft shopsData={shopsData} />
                <WJShopsMainRight shopsData={shopsData} />
            </div>
            <WJShopsDrawer visible={visible} onClose={onClose} shopsData={shopsData}/>
        </ShopsDivStyle>
    )
})
