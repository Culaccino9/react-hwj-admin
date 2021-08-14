import axios from '../index'

/**
 * 获取首页数据
 * /order/totaldata
 * get
 * 参数无
 */
export const totaldata = () => axios.get("/order/totaldata")