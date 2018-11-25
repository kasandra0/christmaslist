const router = require('express').Router()
let Item = require('../models/Item')


router.get('/', (req, res, next) => {
  console.log('getting all items')
  Item.find({})
    .then(items => {
      res.send(items)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Get item by id
router.get('/:id', (req, res, next) => {
  Item.findById(req.params.id)
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

// Create/Post Item
router.post('/', (req, res, next) => {
  Item.create(req.body)
    .then(item => {
      res.send(item)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//Delete Item
router.delete('/:id', (req, res, next) => {
  Item.findByIdAndDelete(req.params.id)
    .then(deletedItem => {
      res.send('Item Deleted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = { router }