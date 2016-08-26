var http=require('http');
var jade=require('jade');
http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/html'
	})
	// 1.compile
	// var htmlContext=jade.compile('.test #{course}')({course:"jade compile"})
	// res.end(htmlContext)
	// 2.render
	// var htmlContext=jade.render('.test #{course}',{course:"jade render"})
	// res.end(htmlContext) 
	// 3.renderFile
	var htmlContext=jade.renderFile('test.jade',{course:'jade renderFile',pretty:true})
	res.end(htmlContext)
}).listen(1337,'127.0.0.1'); 
console.log("server started at port:1337");
//res是http.serverresponse、outgoingmessage实例，见_http_server.js，req是IncomingMessage的实例，见_http_common.js