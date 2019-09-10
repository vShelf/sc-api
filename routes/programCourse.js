const router = require('express').Router()
const Program = require('../models/program')
const Course = require('../models/course')

// Program course endpoint

// get all courses in program
// param - {code}
// TIK
router.get('/:code', (req, res) => {
	Program.findOne({code: req.params.code})
	.populate("courses")
	.then(data => {
    res.json(data.courses)
  })
})

// add course to program
// req.body - {code: 'csm116'}
// param - {code}
// TIK
router.post('/:code', (req, res) => {
	Course.find({$and: [
		{code: req.body.code},
		{"programs._id": req.params.code}
	]})
	.then(data=>{
		console.log('data')
		if(data.length<1){
			// doesn't exist, add new
			addCourse(req.body.code, req.params.code, {req, res})
		}else{
			// exists, inform user
			res.json({message: "course already exists in program"})
		}
	})
})

function courseAndProgram(course, ProgramId, {req, res}){
	Course.findOne({code: course.code}).then(c=>{
		//c.programs.push(ProgramId)

		Program.findOne({code: ProgramId}).then(p=>{
			//insert program into course
			c.programs.push(p._id)
			c.save()
			//insert course into program
			p.courses.push(course._id)
			p.save()

			res.json(course)
		})
	})
}

function addCourse(courseCode, ProgramId, {req, res}){
	// check if course exists
	Course.findOne({code: courseCode})
	.then(data=>{
		if(data) courseAndProgram(data, ProgramId, {req, res})
		else {
			const newCourse = new Course({code: courseCode})
			console.log(newCourse)
			newCourse.save(function(err,data){
				if(err) res.json({error: true, message: "Error saving new course", ERR: err })
				courseAndProgram(data, ProgramId, {req, res})
			})
		}
	})
			// yes - add programId to course.programs && add courseId to program courses = function
			// no - create new course && repeat top
}

module.exports = router
