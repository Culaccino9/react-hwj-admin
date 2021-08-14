import React from 'react'

import { Card } from 'antd'
export default function WJGoodsTypeRight({ goodsCategories }) {
    return (
        <Card title="现有分类" style={{width:"28%",height:"100%"}}>
            {
                goodsCategories.map(car => (
                    <Card.Grid key={car.cateName} style={{ width: "25%", textAlign: "center",backgroundColor:"#1890ffd4",color:"#fff"}}>{car.cateName}</Card.Grid>
                ))
            }
        </Card>
    )
}
