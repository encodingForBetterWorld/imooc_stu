function printIt(param){
	console.log(param);
}
function plus(callback,param){
	setTimeout(function(){
		param++;
		callback(param)
	}, 3000);
}
plus(printIt,0)