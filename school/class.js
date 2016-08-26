var student = require('./student.js')
var teacher = require('./teacher.js')

function add(techName,students){
	teacher.add(techName);
	students.forEach(function(item,index){
		student.add(item);
	})
}
exports.add = add