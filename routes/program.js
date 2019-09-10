const router = require('express').Router()
const Program = require('../models/program')

// Program endpoint

// get all
// TIK
router.get('/', (req, res) => {
  Program.find({}).then(data => {
    res.json(data)
  })
})

// get one
// params - {code}
// TIK
router.get('/:code', (req, res) => {
  Program.findOne({code: req.params.code})
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ error: true, message: 'Error getting Program', ERR: err })
    })
})

// insert one
// TIK
// req.body - {title, code}
router.post('/', (req, res) => {
  let newProgram = new Program(req.body)
  newProgram.save((err, program) => {
    if (err) res.json({ error: true, message: 'Error inserting Program', ERR: err })
    res.json(program)
  })
})

// update one
// req.body - {field: update} - fields {code,title}
// TIK
router.put('/:code', (req, res) => {
  Program.findOneAndUpdate({code: req.params.code}, req.body, { new: true })
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json({ error: true, message: 'Error updating Program', ERR: err })
    })
})

// delete one
// params - {code}
// TIK
router.delete('/:code', (req, res) => {
  Program.findOneAndRemove({code: req.params.code})
    .then(data => {
      res.json({ code: data.code })
    })
    .catch(err => {
      res.json({ error: true, message: 'Error deleting Program', ERR: err })
    })
})

module.exports = router
