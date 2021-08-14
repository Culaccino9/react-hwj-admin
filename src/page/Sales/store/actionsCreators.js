import * as actionType from './constants'

import { ordertotal } from '@/services/sales'
import moment from 'moment'
const updataOrderDataAction = orderData => ({
    type: actionType.UPDATA_ORDERDATA,
    orderData
})
export const getOrderDataAction = () => {
    return dispatch => {
        ordertotal().then(res => {
            // console.log(res.data.data);
            res.data.data.forEach(item=>{
                item.orderTime = moment(item.orderTime).format("YYYY-MM-DD hh:mm:ss")
            })
            dispatch(updataOrderDataAction(res.data.data))
        })
    }
}