import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
    getGoodsCategoriesAction,
    getCatelistAction
} from '../store'

import { Button, Card } from 'antd'
import { GoodsTypeLeftDivStyle } from './style'
import WJGoodsTypeLeft from './childrenCmpt/WJGoodsTypeLeft'
import WJGoodsTypeRight from './childrenCmpt/WJGoodsTypeRight'
import WJGoodsTypeModal from './childrenCmpt/WJGoodsTypeModal'
export default memo(function WJGoodsType() {
    const dispatch = useDispatch()
    const { goodsCategories, catelist } = useSelector(state => ({
        goodsCategories: state.goods.goodsCategories,
        catelist: state.goods.catelist,
    }), shallowEqual)
    useEffect(() => {
        dispatch(getGoodsCategoriesAction())
        dispatch(getCatelistAction())
    }, [dispatch])
    const [modalVisible, setModalVisibel] = useState(false)

    const showModal = () => {
        setModalVisibel(true)
    }
    return (
        <>
            <Card title="商品分类" style={{ marginBottom: "30px" }} extra={<Button onClick={showModal} type="primary">添加分类</Button>}>
                <p>说明：您可以选择分类的开启，或者前往添加分类，添加一个新的品种</p>
                <p>注意：您选择的开启或者关闭分类，都会影响现在有的分类，请谨慎，查看所有分类请见右侧“所有分类”</p>
            </Card>
            <WJGoodsTypeModal modalVisible={modalVisible} setModalVisibel={setModalVisibel} />
            <GoodsTypeLeftDivStyle>
                <WJGoodsTypeLeft catelist={catelist} />
                <WJGoodsTypeRight goodsCategories={goodsCategories} />
            </GoodsTypeLeftDivStyle>
        </>
    )
})
