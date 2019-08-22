const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const users = await User
    .find({}).populate('blogs')
    
  res.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (req, res, next) => {
  const body = req.body
  if(!body.password){
    res.status(400).send("password is required")
  }else if(body.password && body.password.length < 3){
    res.status(400).send("password must contain at least 3 characters")
  }
    else{
  try {
    const body = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      password:passwordHash
    })

    const savedUser = await user.save()

    res.json(savedUser)
  } catch (e) {
    if(e.name === "ValidationError"){
      res.status(400).send(e.message)
    }
    console.log(e)
    next(e)
  }
}
})

module.exports = usersRouter