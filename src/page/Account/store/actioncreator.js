import * as actionType from './constants'

import {
    list,
    edit,
    del
} from '@/services/account'
import moment from 'moment'

import {message} from 'antd'
const updataAccountLisAction = accountList => ({
    type:actionType.UPDATA_ACCOUNT_LIST,
    accountList
})
export const getAccountListAction = () => {
    return (dispatch,getState) => {
        const sendData = {
            currentPage:getState().account.currentPage,
            pageSize:getState().account.pageSize
        }
        list(sendData).then(res=>{
            res.data.data.forEach(user=>{
                user.ctime = moment(user.ctime).format('YYYY-MM-DD hh:mm:ss'); 
            })
            dispatch(updataAccountLisAction(res.data))
        })
    }
}
export const getEditAccountListAction = params => {
    return dispatch => {
        edit(params).then(res=>{
            res.data.code === 0 && dispatch(getAccountListAction())
            res.data.code === 0 && message.success(res.data.msg);
            res.data.code !== 0 && message.error(res.data.msg);
        })
    }
}
export const getDelAccountAction = params => {
    return dispatch => {
        del(params).then(res=>{
            res.data.code === 0 && dispatch(getAccountListAction())
            res.data.code === 0 && message.success(res.data.msg);
            res.data.code !== 0 && message.error(res.data.msg);
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