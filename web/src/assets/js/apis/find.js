import axios from "axios";
import { baseURL } from "../config";

function getHotSearch () {
	return new Promise(
			function (resolve, reject) {
				axios.get(baseURL + '/search/hot/detail')
				     .then(result => {
					     resolve(result.data)
				     })
				     .catch(error => {
					     reject(error)
				     })
			}
	);
}

export {
	getHotSearch
}
