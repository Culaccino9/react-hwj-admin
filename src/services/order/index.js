import axios from '../index'

/**
 * 查询订单列表
 * /order/list
 * get
 * @param {Number} currentPage  当前页码
 * @param {Number} pageSize  每条页数
 * @param {?String} orderNo  订单号
 * @param {?String} consignee  收货人
 * @param {?String} phone  手机号
 * @param {?String} orderState  订单状态
 * @param {?String} date  时间范围
 */
export const list = params => axios.get("/order/list",{ params })

/**
 * 修改订单
 * /order/edit
 * post
 * @param {Number} id 要修改账号的id
 * @param {String} orderNo 订单号
 * @param {String} orderTime 下单时间
 * @param {String} phone 电话
 * @param {String} consignee 收货人
 * @param {String} deliverAddress 送货地址
 * @param {String} deliveryTime 送达时间
 * @param {String} remarks 备注
 * @param {String} orderAmount 订单金额
 * @param {String} orderState 订单状态
 */
export const edit = params => axios.post("/order/edit",params)