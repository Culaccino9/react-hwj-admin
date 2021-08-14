import * as actionType from './constants'

import {accountinfo} from '@/services/user'

const updataUserInfoAction = userInfo => ({
    type:actionType.UPDATA_USERINFO,
    userInfo
})

export const getUserInfoAction = params => {
    return dispatch =>{
        accountinfo(params).then(res=>{
            // console.log(res.data.accountInfo);
            sessionStorage.userInfo = JSON.stringify(res.data.accountInfo)
            dispatch(updataUserInfoAction(res.data.accountInfo))
        })
    }
}

export const updataTokenAction = token => ({
    type:actionType.UPDATA_TOKEN,
    token
})