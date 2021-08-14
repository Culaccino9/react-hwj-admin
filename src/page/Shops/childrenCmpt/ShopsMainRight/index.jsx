import React from 'react'

import {
    Card,
    Tag,
    Carousel,
    Image,
    Calendar
} from 'antd'
import { ShopsMainRDivStyle } from './style'
export default function WJShopsMainRight({ shopsData }) {
    const { supports, pics } = shopsData
    return (
        <ShopsMainRDivStyle>
            <Card title="本店活动">
                {
                    supports && supports.map(tag => <Tag color="red" key={tag}>{tag}</Tag>)
                }
                <p style={{ marginTop: "24px" }}>您还可以通过修改添加更多的活动</p>
            </Card>
            <Card className="right-info" title="商品展示">
                <Carousel autoplay>
                    {
                        pics.map((img) => {
                            return (
                                <Image
                                    width={"100%"}
                                    key={img}
                                    src={img}
                                />
                            )
                        })
                    }
                </Carousel>
            </Card>
            <Card className="right-opinion" title="日历">
                <Calendar fullscreen={false} />
            </Card>
        </ShopsMainRDivStyle>
    )
}
