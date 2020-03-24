import base from "./base"
import axios from "../utils/http"

const getData = {
    // 很多接口
    getTodayRecommend(params){
        return axios.get(base.baseUrl+base.type,{
            params:params
        })
    },
    getTabMusic(params){
        return axios.get(base.baseUrl+base.type,{
            params:params
        })
    },
    playerData(params){
        return axios.get(base.baseUrl+base.type,{
            params:params
        })
    },
    getLyric(params){
        return axios.get(base.baseUrl+base.type,{
            params:params
        })
    }
}

export default getData