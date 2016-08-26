var pet={
	speak:function(say){
		console.log(say+' '+this.words);
	}
}
// pet.speak('Speak')
var dog={
	words:'Wang Wang!'
}
pet.speak.call(dog,'Speak')
pet.speak.apply(dog,['Speak'])
// 寄生继承
function Pet(words){
	this.speak=function(){
		console.log(words);
	}
}
function Cat(words){
	Pet.call(this,words)
	// pet.apply(this,arguements)
}
var cat = new Cat('Miao Miao!')
cat.speak()