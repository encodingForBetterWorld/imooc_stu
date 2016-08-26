function learn(param){
	console.log(param);
}
function append(callback,param){
	param+=' is cool'
	callback(param)
}
// 传入函数learn
append(learn,'Nodejs')
// 传入匿名函数
append(function(param){
	console.log(param);
},'Jade')
