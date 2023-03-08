const express = require('express')

const router = express.Router()
router.use(logger)

router.get('/', (req, res) => {
  res.send('userlist')
})

router.get('/new', (req, res) => {
  res.send('new user hello')
})

router.post('/', (req, res) => {
  res.send('user creteaed')
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}
router
  .route('/:id')
  .get((req, res) => {
    const id = req.params.id
    console.log(`user us ${req.user.name}`)
    res.send(`user with ID  ${id}`)
  })
  .put((req, res) => {
    const id = req.params.id
    res.send(`pute user with ID${id}`)
  })
  .delete((req, res) => {
    const id = req.params.id
    res.send(`delete user with ID${id}`)
  })
  .post((req, res) => {
    const id = req.params.id
    res.send(` post user with ID${id}`)
  })

const users = [{ name: 'leenus' }, { name: 'yetano' }]

//runds when a params have a id  this is a type of middleware
router.param('id', (req, res, next, id) => {
  console.log(`parsms ${id}`)
  req.user = users[id]
  next()
})

module.exports = router
