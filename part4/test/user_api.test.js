const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')

beforeEach(async () => {
  await User.deleteMany({})
})

describe('User test', () => {
  test('Without password no user can be created', async () => {
    const userWithoutPwd = {
      username: 'usertest',
      name: 'Mr User',
      password: 'password23456'
    }
    await api
      .post('api/blogs/')
      .send(userWithoutPwd)
      .expect(400)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
