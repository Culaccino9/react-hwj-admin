import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHomeDataAction } from './store'

import { HomeDivStyle } from './style.js'
import WJHomeCar from './childrenCmpt/WJHomeCar'
import WJHomeChart from './childrenCmpt/WJHomeChart'
export default memo(function WJHome() {
    const { homeData } = useSelector(state => ({
        homeData: state.home.homeData
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHomeDataAction())
    }, [dispatch])


    return (
        <HomeDivStyle>
            <div className="home-car">
                <WJHomeCar homeData={homeData} />
            </div>
            <WJHomeChart xData={homeData.xData} orderData={homeData.orderData} amountData={homeData.amountData} />
        </HomeDivStyle>
    )
})
