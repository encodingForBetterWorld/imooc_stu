var http = require('http')
var cheerio=require('cheerio')
var url = 'http://www.imooc.com/learn/348'
http.get(url,function(res){
	var htmlcontext=''
	res.on('data',function(data){
		htmlcontext+=data
	})
	res.on('end',function(){
		var htmlData=filterChapter(htmlcontext);
		printInfo(htmlData)
	})
}).on('error',function(){
	console.log('获取数据出错');
})
function filterChapter(htmlcontext){
	var $ = cheerio.load(htmlcontext)
	var chapters=$('.chapter')
	var chapterDatas=[]
	chapters.each(function(item){
		var chapter=$(this)
		var chapterTitle=chapter.find('strong').text().trim()
		var videos=chapter.find('.video').children('li')
		var chapterData={
			title:chapterTitle,
			videos:[]
		}
		videos.each(function(it){
			var video=$(this).find('a')
			var t=video.text().trim()
			var id=video.attr('href').split('video/')[1]
			chapterData.videos.push({
				_t:t,
				_id:id
			})
		})
		chapterDatas.push(chapterData)
	})
	return chapterDatas 
}
function printInfo(chapterDatas){
	chapterDatas.forEach(function(item){
		var title=item.title
		console.log('标题'+title+'\n');
		item.videos.forEach(function(v){
			 console.log('【'+v._t+"】"+"编号:"+v._id);
		})
	})
}