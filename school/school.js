var _class = require('./class.js')
exports.add = function(classes){
	classes.forEach(function(item,index){
	var sub_class = item,
	techName = item.techName,
	students = item.students
	_class.add(techName,students)
	})
}