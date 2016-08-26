var http=require('http')
var querystring=require('querystring')
var postData=querystring.stringify({
	'user.id':"402881025475d81f015475db1e020000",
	'st.basic':'4000',
	'st.eat':"50",
	'st.house':"0",
	'st.duty':"0",
	'st.scot':"0",
	'st.other':"0",
	'st.totalize':"1000",
	'st.granttime':"2016-08-11"
})
var options={
	hostname:'localhost',
	port:8080,
	path:'/empSystem/stipend/saveStipend',
	method:'POST',
	headers:{
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
		'Accept-Language': 'zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3',
		'Accept-Encoding': 'gzip, deflate',
		'Cookie': 'JSESSIONID=F710AB7DFBFCC0D7ED83912BB6A386DF',
		'Connection': 'keep-alive',
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}

}
var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	})
	res.on('end',function(){
		console.log('上传数据完毕！');
	})
})
req.on('error',function(e){
	console.log('Error:'+e.message);
})
req.write(postData)
req.end()