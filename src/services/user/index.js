import axios from '../index'

/**
 * 获取个人中心信息
 * /users/accountinfo
 * get
 * @param {Number} id 用户ID
 */
export const accountinfo = params =>{
    return axios.get("/users/accountinfo",{params})
}
