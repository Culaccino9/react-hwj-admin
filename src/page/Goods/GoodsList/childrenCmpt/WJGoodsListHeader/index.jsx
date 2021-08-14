import React from 'react'

import {
    Input,
    Tag
} from 'antd'
import { WJGoodsHeaderDivStyle } from './style'
export default function WJGoodsListHeader({ goodsCategories }) {
    const { Search } = Input
    return (
        <WJGoodsHeaderDivStyle>
            <Search className="goods-search" placeholder="don't do it !" enterButton="搜索" size="large" loading />
            <div>
                {
                    goodsCategories.map(item => (
                        <Tag color="lime" key={item.cateName}>{item.cateName}</Tag>
                    ))
                }
            </div>
        </WJGoodsHeaderDivStyle>
    )
}
