/* eslint-disable */
import { baseURL } from "../config";
import Axios from "axios";

/**
 * 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户
 * 必选参数 : keywords : 关键词
 * 可选参数 :
 *    limit : 返回数量 , 默认为 30
 *    offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 *    type: 搜索类型:
 *              默认为 1 即单曲 ,
 *          取值意义:
 *              1: 单曲,
 *              10: 专辑,
 *              100: 歌手,
 *              1000: 歌单,
 *              1002: 用户,
 *              1004: MV,
 *              1006: 歌词,
 *              1009: 电台,
 *              1014: 视频,
 *              1018:综合
 * @param data
 * @returns {Promise<unknown>}
 */
function doSearch (data) {
	return new Promise(function (resolve, reject) {
		Axios.get(baseURL + '/search', { params: data })
		     .then(result => {
			     resolve(result.data);
		     })
		     .catch(error => {
			     reject(error)
		     })
	});
}

/**
 * 搜索建议
 * 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * 必选参数 : keywords : 关键词
 * @param keywords
 * @returns {Promise<unknown>}
 */
function getSuggest (keywords) {
	return new Promise(function (resolve, reject) {
		Axios.get(baseURL + '/search/suggest', { params: { keywords, type: 'mobile' } })
		     .then(result => {
			     resolve(result.data);
		     })
		     .catch(error => {
			     reject(error)
		     })
	});
}

export {
	getSuggest,
	doSearch
}
