const router = require('express').Router()
const Course = require('../models/course')

// get all
router.get('/', (req, res) => {
  Course.find({}).then(data => {
    res.json(data)
  })
})

// get one
router.get('/:id', (req, res) => {
  Course.findById(req.params.id)
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ error: true, message: 'Error getting Course', ERR: err })
    })
})

// insert one
router.post('/', (req, res) => {
  let newCourse = new Course(req.body)
  newCourse.save((err) => {
    if (err) res.json({ error: true, message: 'Error inserting Course', ERR: err })
    res.json(newCourse)
  })
})

// update one
router.put('/:id', (req, res) => {
  Course.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ error: true, message: 'Error updating Course', ERR: err })
    })
})

// delete one
router.delete('/:id', (req, res) => {
  Course.findByIdAndRemove(req.params.id)
    .then(data => {
      res.json({ _id: data._id })
    })
    .catch(err => {
      res.json({ error: true, message: 'Error deleting Course', ERR: err })
    })
})

module.exports = router
