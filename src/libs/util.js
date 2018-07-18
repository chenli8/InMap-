import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' - Home' : 'iView project';
    window.document.title = title;
};

util.toFormData = function(data){
	let params = new URLSearchParams();

	for(let k in data){
		params.append(k, data[k]);
	}

	return params
}

// const ajaxUrl = 'http://172.30.113.69:9850';
const ajaxUrl = 'http://113.106.54.173:2995';


util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000,
    transformRequest: function(data, headers) {
	    return util.toFormData(data)
	},
    headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
});

export default util;