import axios from '../index'

/**
 * 订单报表
 * /order/ordertotal
 * get
 * @param {String} date 日期数组
 */
export const ordertotal = () => axios.get("/order/ordertotal",{date:["2019-10-01 00:00:00", "2019-10-10 00:00:00"]})