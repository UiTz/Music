/* eslint-disable */
// 轮播图组件api
import Axios from "axios";
import { baseURL } from "../config";

/**
 * /banner
 * type:资源类型,对应以下类型,默认为 0 即PC
 *      0: pc
 *      1: android
 *      2: iphone
 *      3: ipad
 */
function getCarousel (data) {
	return new Promise(function (resolve, reject) {
		Axios.get(baseURL + '/banner', { params: data })
		     .then(result => {
			     resolve(result.data)
		     })
		     .catch(error => {
			     reject(error)
		     })
	});
}

export {
	getCarousel,
}
