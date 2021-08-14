import * as actionType from './constants'


const userInfo = sessionStorage.userInfo ? JSON.parse(sessionStorage.userInfo) : '';
const token = sessionStorage.token ? sessionStorage.token : null ;
const defaultState = {
    userInfo,
    token,
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionType.UPDATA_USERINFO:
            return { ...state, userInfo: action.userInfo }
        case actionType.UPDATA_TOKEN:
            return { ...state, token: action.token }
        default:
            return state
    }
}


export default reducer