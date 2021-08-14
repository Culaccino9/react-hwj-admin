import axios from 'axios'

import {BASE_URL , TIMEOUT} from './config'

const instance = axios.create({
    baseURL:BASE_URL,
    timeout:TIMEOUT
})

instance.interceptors.request.use(config=>{
    config.headers.Authorization = sessionStorage.token
    config.headers["Authorization"] = sessionStorage.token
    return config
})

export default instance 