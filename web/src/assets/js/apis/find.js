/* eslint-disable */
import { baseURL } from "../config";
import Axios from "axios";

/**
 * 说明 : 调用此接口 , 可获取推荐歌单
 * 可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
 * 接口地址 : /personalized
 */
function getMiniMuzikland (count = 30) {
	return new Promise(function (resolve, reject) {
		Axios.get(baseURL + '/personalized', { params: { limit: count } })
		     .then(res => {
			     resolve(res.data.result)
		     })
		     .catch(err => {
			     reject(err)
		     })
	});
}

export {
	getMiniMuzikland
}
