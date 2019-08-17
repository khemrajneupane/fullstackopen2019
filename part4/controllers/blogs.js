const express = require("express");
const blogsRouter = express.Router();
const Blog = require("../models/blog");

/**get all posts */
blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs.map(blog => blog.toJSON()));
});

/**POST a new blog */
blogsRouter.post("/", async (req, res, next) => {
  const body = req.body;
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  });
  if (!blog.title || !blog.author || !blog.url) {
    res.status(400).send("title, author, url fields are all required");
  } else if (!body.likes) {
    blog.likes = 0;
  } else if (body.likes && isNaN(Number(body.likes))) {
    res.send(`${body.likes} is not a number. Please supply a valid number`);
  }
  try {
    const savedBlogs = await blog.save();
    res.status(201).json(savedBlogs.toJSON());
  } catch (e) {
    if (e.name === "CastError") {
      console.log(e);
      res.status(400).send(`Value for ${e.stringValue} is not correct`);
    } else {
      next(e);
    }
  }
});

/**DELETE a post with by id, Ex-4.13*/
blogsRouter.delete("/:id", async (req, res, next) => {
  try {
    await Blog.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (e) {
    if (e.name === "CastError") {
      console.log(e);
      res.status(400).send(`Id: ${e.stringValue} does not exist`);
    } else {
      next(e);
    }
  }
});

/**DELETE a post by id, Ex-4.14*/
blogsRouter.put("/:id", async (req, res, next) => {
  const body = req.body;
  const updateBlog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  };
  if (!body.title || !body.url || !body.author) {
    res.status(400).json({ error: "missing fields" });
  } else if (!body.likes) {
    updateBlog.likes = 0;
  } else if (isNaN(Number(body.likes))) {
    res.status(400).json({ error: "value of like should be a number" });
  } else {
    try {
      await Blog.findByIdAndUpdate(req.params.id, updateBlog);
      res.status(201).send();
    } catch (e) {
      if (e.name === "CastError") {
        console.log(e);
        res.status(400).send(`${e.value} is not correct id`);
      } else {
        next(e);
      }
    }
  }
});
module.exports = blogsRouter;
