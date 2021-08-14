import * as actionType from './constants'

const defalutState = {
    orderData : null,
}
const reducer = (state=defalutState,action)=>{
    switch(action.type){
        case actionType.UPDATA_ORDERDATA:
            return {...state,orderData:action.orderData}
        default:
            return state
    }
}

export default reducer