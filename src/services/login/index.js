import axios from '../index'

/**
 * 登录
 * /users/checkLogin
 *@param {String} account 用户名
 *@param {String} password 密码
 */
export const checkLogin = params => axios.post("/users/checkLogin",params)