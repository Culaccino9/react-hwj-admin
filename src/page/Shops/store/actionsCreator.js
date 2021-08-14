import * as actionType from './constants'

import {
    info,
    edit
} from '@/services/shops'
import { message } from 'antd'

const updataShopsDataAction = shopsData=>({
    type:actionType.UPDATA_SHOPSDATA,
    shopsData
})

export const getShopsDataAction = ()=>{
    return dispatch =>{
        info().then(res=>{
            dispatch(updataShopsDataAction(res.data.data))
        })
    }
}
export const getUpdataShopsDataAction = params => {
    return dispatch => {
        edit(params).then(res=>{
            if(res.data.code===0){
                dispatch(getShopsDataAction())
                message.success(res.data.msg)
            }
        })
    }
}