import * as actionType from './constants'

import { totaldata } from '@/services/home'
import { toThousands } from '@/utils/format'
const updataHomeDataAction = homeData => ({
    type: actionType.UPDATA_HOMEDATA,
    homeData
})
export const getHomeDataAction = () => {
    return dispatch => {
        totaldata().then(res=>{
            for(let key in res.data){
                if(typeof res.data[key] === "number"){
                    res.data[key] = toThousands(res.data[key])
                }
            }
            dispatch(updataHomeDataAction(res.data))
        })
    }
}