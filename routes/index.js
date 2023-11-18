const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
]

const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages: messages })
})

router
  .get('/new', (req, res) => {
    res.render('form')
  })
  .post('/new', (req, res) => {
    console.log(req.body.text)
    let newMessage = {
      text: req.body.message,
      user: req.body.name,
      added: new Date(),
    }
    messages.push(newMessage)
    res.redirect('/')
  })

module.exports = router
