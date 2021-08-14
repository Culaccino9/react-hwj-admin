import * as actionType from './constanst'

import { list } from '@/services/order'

import moment from 'moment'
const updataOrderListAction = orderList => ({
    type: actionType.UPDATA_ORDER_LIST,
    orderList
})
export const getOrderListAction = params => {
    return (dispatch, getState) => {
        const sendData = { currentPage: getState().order.currentPage, pageSize: getState().order.pageSize, ...params }
        list(sendData).then(res => {
            res.data.data.forEach(item=>{
                item.orderTime=moment(item.orderTime).format('yyyy-MM-DD hh:mm:ss')
                item.deliveryTime=moment(item.deliveryTime).format('yyyy-MM-DD hh:mm:ss')
            })
            dispatch(updataOrderListAction(res.data))
        })
    }
}
export const updataPageSizeAction = pageSize =>({
    type:actionType.UPDATA_PAGESIZE,
    pageSize
})
export const updataCurrentPageAction = currentPage =>({
    type:actionType.UPDATA_CURRENTPAGE,
    currentPage
})