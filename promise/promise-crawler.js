var http = require('http')
var cheerio=require('cheerio')
var baseUrl='http://www.imooc.com/learn/'
var videoIds=['348','259','197','134','75']

function filterChapter(htmlcontext){
	var $ = cheerio.load(htmlcontext)
	var chapters=$('.chapter')
	var title = $('.course-infos .pr .hd h2').text()
	// var stuNum = $($($('.course-infos .pr .statics .l')[1]).find('span')[1]).text()
	var stuLevel = $($($('.course-infos .pr .statics .l')[2]).find('span')[1]).text()
	var stuTime = $($('.course-infos .pr .statics .l')[3]).find('.meta-value').text()
	var chapterDatas={
		title:title,
		// stuNum:stuNum,
		stuLevel:stuLevel,
		stuTime:stuTime,
		coursesData:[]
	}
	chapters.each(function(item){
		var chapter=$(this)
		var chapterTitle=chapter.find('strong').text().replace(/\s/g, "")
		var videos=chapter.find('.video').children('li')
		var chapterData={
			title:chapterTitle,
			videos:[]
		}
		videos.each(function(it){
			var video=$(this).find('a')
			var t=video.text().replace(/\s/g, "")
			var id=video.attr('href').split('video/')[1]
			chapterData.videos.push({
				_t:t,
				_id:id
			})
		})
		chapterDatas.coursesData.push(chapterData)
	})
	return chapterDatas 
}
function printInfo(chapterDatas){
	chapterDatas.forEach(function(chapter){
		console.log('【标题】'+chapter.title+' 【学习难度】'+chapter.stuLevel+' 【课程时长】'+chapter.stuTime+'\n');
		chapter.coursesData.forEach(function(item){
			console.log('标题'+item.title+'\n');
			 item.videos.forEach(function(v){
				 console.log('【'+v._t+"】"+"编号:"+v._id);
			})
		})
	})
}
function getPageAsync(url){
	return new Promise(function(resolve,reject){
		console.log('正在爬取'+url);
		http.get(url,function(res){
			var htmlcontext=''
			res.on('data',function(data){
				htmlcontext+=data
			})
			res.on('end',function(){
				resolve(htmlcontext)
			})
		}).on('error',function(){
			reject()
			console.log('获取数据出错');
		})
	})
}
var PromiseCourseArray=[]
videoIds.forEach(function(id){
	PromiseCourseArray.push(getPageAsync(baseUrl+id))
})
Promise
	.all(PromiseCourseArray)
	.then(function(pages){
		var chapterDatas=[]
		pages.forEach(function(html){
			var chapter=filterChapter(html)
			chapterDatas.push(chapter)
	})
		chapterDatas.sort(function(a,b){
			return a.number<b.number
		})
		printInfo(chapterDatas)
	})