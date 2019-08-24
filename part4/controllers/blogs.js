const express = require('express')
const blogsRouter = express.Router()
const config = require('../utils/config')
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')
const tokenExtractor = require('../utils/middleware')

/**get http://localhost:3003/api/blogs*/
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', {
    username: 1,
    name: 1,
    password: 1
  })
  response.json(blogs.map(blog => blog.toJSON()))
})

/**POST http://localhost:3003/api/blogs/id */
blogsRouter.post('/', async (req, res, next) => {
  const body = req.body
  //console.log(user);
  if (!body.title || !body.author || !body.url) {
    res.status(400).send('title, author, url fields are all required')
  } else if (body.likes && isNaN(Number(body.likes))) {
    res.send(`${body.likes} is not a number. Please supply a valid number`)
  }
  try {
    const decodedToken = await jwt.verify(
      tokenExtractor.tokenExtractor(req),
      config.SECRET
    )

    if (!tokenExtractor.tokenExtractor(req) || !decodedToken.id) {
      res.status(400).send({ error: 'Incorrect username or password' })
      return
    }
    const user = await User.findById(decodedToken.id)
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
      user: user._id
    })
    if (!blog.likes) {
      blog.likes = 0
    }
    const savedBlogs = await blog.save()
    user.blogs = user.blogs.concat(savedBlogs._id)
    await user.save()
    res.status(201).json(savedBlogs.toJSON())
  } catch (e) {
    if (e.name === 'CastError') {
      //console.log(e);
      res.status(400).send(`Value for ${e.stringValue} is not correct`)
    } else {
      next(e)
    }
  }
})
/**DELETE http://localhost:3003/api/blogs/id*/

blogsRouter.delete('/:id', async (req, res, next) => {
  try {
    const decodedToken = await jwt.verify(
      tokenExtractor.tokenExtractor(req),
      config.SECRET
    )
    console.log(tokenExtractor.tokenExtractor(req))
    if (!tokenExtractor.tokenExtractor(req) || !decodedToken.id) {
      res.status(400).send({ error: 'Incorrect username or password' })
      return
    }
    const delThisBlog = await Blog.findById(req.params.id)

    //console.dir(delThisBlog);
    if (delThisBlog.user.toString() === decodedToken.id.toString()) {
      await Blog.findByIdAndRemove(req.params.id)
      res.status(204).end()
    } else {
      res.status(400).end()
    }
  } catch (e) {
    if (e.name === 'CastError') {
      console.log(e)
      res.status(400).send(`Id: ${e.stringValue} does not exist`)
    } else {
      next(e)
    }
  }
})

/**UPDATE http://localhost:3003/api/blogs/id*/

blogsRouter.put('/:id', async (req, res, next) => {
  const body = req.body

  if (!body.title || !body.url || !body.author) {
    res.status(400).json({ error: 'missing fields' })
  } else if (body.likes && isNaN(Number(body.likes))) {
    res.status(400).json({ error: 'value of like should be a number' })
  } else {
    try {
      const updateBlog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes ? body.likes : 0
      }
      /*
      if (!updateBlog.likes) {
        updateBlog.likes = 0;
      }*/
      await Blog.findByIdAndUpdate(req.params.id, updateBlog)
      res.status(201).send()
    } catch (e) {
      if (e.name === 'CastError') {
        console.log(e)
        res.status(400).send(`${e.value} is not correct id`)
      } else {
        next(e)
      }
    }
  }
})

module.exports = blogsRouter
