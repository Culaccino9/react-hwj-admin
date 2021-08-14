import React, { createContext, memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
    getGoodsListAction,
    getGoodsCategoriesAction
} from '../store'

import WJGoodsListHeader from './childrenCmpt/WJGoodsListHeader'
import WJGoodsListTable from './childrenCmpt/WJGoodsListTable'

export const CountContext = createContext()
export default memo(function WJGoodsList() {
    const dispatch = useDispatch()
    const { goodsList, goodsCategories } = useSelector(state => ({
        goodsList: state.goods.goodsList,
        goodsCategories: state.goods.goodsCategories
    }), shallowEqual)
    useEffect(() => {
        dispatch(getGoodsListAction())
        dispatch(getGoodsCategoriesAction())
    }, [dispatch])
    return (
        <>
            <WJGoodsListHeader goodsCategories={goodsCategories && goodsCategories} />
            <CountContext.Provider value={goodsCategories && goodsCategories}>
                <WJGoodsListTable
                    goodsList={goodsList && goodsList.data}
                    total={goodsList && goodsList.total}
                />
            </CountContext.Provider>
        </>
    )
})
