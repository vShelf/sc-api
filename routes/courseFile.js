const router = require('express').Router()
const Course = require('../models/course')
const File = require('../models/fileSchema').File

// files in courses endpoint

// get all file
// param - {code}
// TIK
router.get('/:code', (req,res) => {
	Course.findOne({code: req.params.code})
	.then(course=>{
		res.json(course.files)
	})
	.catch(err => {
		res.json({error: true, message: "Error getting files", ERR: err})
	})
})

// add file to course
// param - {code}
// req.body - {title,uri,size,extension,author,isLecturer}
// TIK
router.post('/:code', (req,res) => {
	Course.findOne({code: req.params.code})
	.then(course => {
		const newFile =  new File(req.body)
		course.files.push(newFile)
		course.save((err,resp) => {
			if(err) res.json({error: true, message: "error saving course", ERR: err})
			res.json(resp)
		})
	})
})

// remove file from course
// param - {code}
// req.body - {uri}
// TIK
router.delete('/:code', (req,res) => {
	Course.findOne({code: req.params.code})
	.then(course => {
		let newCourses = course.files.filter(c => {
			return req.body.uri !=  c.uri
		})
		//console.log(newCourses)
		course.files = newCourses
		course.save((err,resp) => {
			if(err) res.json({error: true, message: "error removing file", ERR: err})
			res.json(resp)
		})
	})
})



module.exports = router