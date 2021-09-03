//=>把JSON字符串转换JSON对象，并且过滤掉STATE===1的
function dataHandle(str) {
	let arr = JSON.parse(str);
	arr = arr.filter(item => {
		return parseInt(item.state) === 0;
	});
	return arr;
}

//=>二次加密规则
function md5Handle(val) {
	return val.substring(4).split('').reverse().join('').substring(4);
}

//=>统一处理服务器返回的结果
function success(res, options) {
	res.status(200);
	res.type('application/json');
	res.send(Object.assign({
		code: 0,
		codeText: 'OK',
		data: null
	}, options));
}
// => 根据id获取用户的详细信息
function queryUSER(req,id) {
	return req.$USERDATA.find(item=>{
		return parseInt(item.id) === parseInt(id)
	})
}
// 根据id获取职务信息
function queryJOB(req, jobId) {
	return req.$JOBDATA.find(item => {
		return parseInt(item.id) === parseInt(jobId);
	});
}
// 根据id获取职务信息
function queryDeparment(req,id) {
	return req.$DEPARTMENTDATA.find(item=>{
		return parseInt(item.id) == parseInt(id)
	})
}
module.exports = {
	dataHandle,
	md5Handle,
	success,
	queryJOB,
	queryDeparment,
	queryUSER
};