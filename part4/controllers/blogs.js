const express = require("express");
const blogsRouter = express.Router();
const Blog = require("../models/blog");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs.map(blog => blog.toJSON()));
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes
  });
  if (!blog.title || !blog.author || !blog.url) {
    response.status(400).send();
  } else {
    if (!blog.likes) {
      blog.likes = 0;
    }
  }
  try {
    const savedBlogs = await blog.save();
    response.status(201).json(savedBlogs.toJSON());
  } catch (error) {
    next(error);
  }
});
module.exports = blogsRouter;
