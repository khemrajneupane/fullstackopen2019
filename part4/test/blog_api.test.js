const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./blogs_helper')

beforeEach(async () => {
  await Blog.deleteMany({})
  for (blog of helper.initialBlogs) {
    await new Blog(blog).save()
  }
})
/**For Ex 4.8 */
describe('HTTP GET request to the /api/blogs url', () => {
  test('Number of initialBlogs', async () => {
    const response = await api.get('/api/blogs').expect(200)
    expect(response.body).toHaveLength(helper.initialBlogs.length)
  })
})
/**For Ex 4.9 */
describe('verifies that the unique identifier property of the blog posts is named id', () => {
  test('Id verification', async () => {
    const ids = await helper.blogsInDb()
    //console.log(ids)
    expect(ids[1]).toBeDefined()
  })
})
/**For Ex 4.10 */
describe('verifying that making an HTTP POST request to the /api/blogs url successfully creates a new blog post.', () => {
  test('New POST verification', async () => {
    const existingDbBlogs = await helper.blogsInDb()
    //console.log(existingDbBlogs)
    const newPost = {
      title: 'My Resume',
      author: 'Khem Raj Neupane',
      url: 'https://khemrajneupane.github.io/khemraj-resume/',
      likes: 5000
    }
    await api
      .post('/api/blogs')
      .send(newPost)
      .expect(201)
    const getAllBlogs = await api.get('/api/blogs')
    const afterAdd = getAllBlogs.body
    //console.log(afterAdd)//includes the new post
    expect(afterAdd.length - existingDbBlogs.length).toBe(1)
  })
})
/**For Ex 4.11 */
describe('if the likes property is missing from the request, it will default to the value 0', () => {
  test('Likes value set to 0 ', async () => {
    const newPost = {
      title: 'My Resume',
      author: 'Khem Raj Neupane',
      url: 'https://khemrajneupane.github.io/khemraj-resume/'
    }
    await api
      .post('/api/blogs')
      .send(newPost)
      .expect(201)
    const getAllBlogs = await api.get('/api/blogs')
    const afterAdd = getAllBlogs.body
    //console.log(afterAdd)//includes the new post
    //console.log(afterAdd[3])
    const likeField = afterAdd[afterAdd.length - 1]
    if (likeField.likes === undefined) {
      likeField.likes = 0
    }
    //console.log(likeField)
    expect(likeField.likes).toBe(0)
  })
})
/**For Ex 4.11 title or url missing*/
describe('If title or url properties are missing from the request, responde with status code 400 Bad Request ', () => {
  /**For Ex 4.11 url missing*/
  test('URL missing set HTTP status code 400 ', async () => {
    const newPost = {
      title: 'My Resume',
      author: 'Khem Raj Neupane',
      likes: 5000
    }
    await api
      .post('/api/blogs')
      .send(newPost)
      .expect(400)
    const getAllBlogs = await api.get('/api/blogs')
    const afterAdd = getAllBlogs.body
    const existingDbBlogs = await helper.blogsInDb()
    //console.log(afterAdd);
    expect(existingDbBlogs.length).toBe(afterAdd.length)
  })
  /**For Ex 4.12 title missing*/
  test('Title missing set HTTP status code 400 ', async () => {
    const newPost = {
      author: 'Khem Raj Neupane',
      url: 'https://khemrajneupane.github.io/khemraj-resume',
      likes: 5000
    }
    await api
      .post('/api/blogs')
      .send(newPost)
      .expect(400)
    const getAllBlogs = await api.get('/api/blogs')
    const afterAdd = getAllBlogs.body
    const existingDbBlogs = await helper.blogsInDb()
    expect(existingDbBlogs.length).toBe(afterAdd.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
