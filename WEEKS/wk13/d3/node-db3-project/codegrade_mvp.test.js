const request = require('supertest')
const server = require('./api/server')
const db = require('./data/db-config')

const { users: initialUsers } = require('./data/seeds/02-users')
const { posts: initialPosts } = require('./data/seeds/03-posts')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

test('[0] sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  describe('[GET] /api/users', () => {
    test('[1] can get the correct number of users', async () => {
      let res = await request(server).get('/api/users')
      expect(res.body).toHaveLength(initialUsers.length)
    }, 500)
    test('[2] can get all the correct users', async () => {
      let res = await request(server).get('/api/users')
      expect(res.body).toMatchObject(initialUsers)
    }, 500)
  })
  describe('[GET] /api/users/:id', () => {
    test('[3] can get the correct user', async () => {
      let res = await request(server).get('/api/users/1')
      expect(res.body).toMatchObject(initialUsers[0])
      expect(res.body).toHaveProperty('id')
      res = await request(server).get('/api/users/2')
      expect(res.body).toMatchObject(initialUsers[1])
      expect(res.body).toHaveProperty('id')
    }, 500)
    test('[4] responds with a 404 if id does not exist', async () => {
      let res = await request(server).get('/api/users/111')
      expect(res.status).toBe(404)
    })
    test('[5] responds with the correct error message if id does not exist', async () => {
      let res = await request(server).get('/api/users/111')
      expect(res.body.message).toMatch(/not found/i)
    }, 500)
  })
  describe('[POST] /api/users', () => {
    test('[6] creates a new user in the database', async () => {
      await request(server).post('/api/users').send({ name: 'foo' })
      let users = await db('users')
      expect(users).toHaveLength(initialUsers.length + 1)
      await request(server).post('/api/users').send({ name: 'bar' })
      users = await db('users')
      expect(users).toHaveLength(initialUsers.length + 2)
    }, 500)
    test('[7] responds with the newly created user', async () => {
      let res = await request(server).post('/api/users').send({ name: 'foo' })
      expect(res.body).toMatchObject({ id: 10, name: 'foo' })
      res = await request(server).post('/api/users').send({ name: 'bar' })
      expect(res.body).toMatchObject({ id: 11, name: 'bar' })
    }, 500)
    test('[8] responds with a 400 if missing name', async () => {
      let res = await request(server).post('/api/users').send({ random: 'thing' })
      expect(res.status).toBe(400)
    }, 500)
    test('[9] responds with the correct error message if missing name', async () => {
      let res = await request(server).post('/api/users').send({ random: 'thing' })
      expect(res.body.message).toMatch(/missing required name/i)
    }, 500)
  })
  describe('[PUT] /api/users/:id', () => {
    test('[10] writes the updates in the database', async () => {
      await request(server).put('/api/users/1').send({ name: 'FRODO BAGGINS' })
      let users = await db('users')
      expect(users[0]).toMatchObject({ id: 1, name: 'FRODO BAGGINS' })
    }, 500)
    test('[11] responds with the newly updated user', async () => {
      let res = await request(server).put('/api/users/1').send({ name: 'FRODO BAGGINS' })
      expect(res.body).toMatchObject({ id: 1, name: 'FRODO BAGGINS' })
    }, 500)
    test('[12] responds with a 404 if user id does not exist', async () => {
      let res = await request(server).put('/api/users/111').send({ name: 'FRODO BAGGINS' })
      expect(res.status).toBe(404)
    }, 500)
    test('[13] responds with a 400 if missing name', async () => {
      let res = await request(server).put('/api/users/1').send({ no: 'FRODO BAGGINS' })
      expect(res.status).toBe(400)
    }, 500)
    test('[14] responds with the correct error message if missing name', async () => {
      let res = await request(server).put('/api/users/1').send({ no: 'FRODO BAGGINS' })
      expect(res.body.message).toMatch(/missing required name/i)
    }, 500)
  })
  describe('[DELETE] /api/users/:id', () => {
    test('[15] deletes the user from the database', async () => {
      await request(server).delete('/api/users/1')
      let users = await db('users')
      expect(users[0]).toMatchObject({ name: 'Samwise Gamgee' })
    }, 500)
    test('[16] responds with the newly deleted user', async () => {
      let res = await request(server).delete('/api/users/1')
      expect(res.body).toMatchObject({ id: 1, name: 'Frodo Baggins' })
    }, 500)
    test('[17] responds with a 404 if user id does not exist', async () => {
      let res = await request(server).delete('/api/users/111')
      expect(res.status).toBe(404)
    }, 500)
  })
  describe('[GET] /api/users/:id/posts', () => {
    test('[18] gets the correct number of user posts', async () => {
      const res = await request(server).get('/api/users/1/posts')
      expect(res.body).toHaveLength(initialPosts.filter(p => p.user_id == 1).length)
    }, 500)
    test('[19] responds with a 404 if user id does not exist', async () => {
      const res = await request(server).get('/api/users/111/posts')
      expect(res.status).toBe(404)
    }, 500)
  })
  describe('[POST] /api/users/:id/posts', () => {
    test('[20] creates a new user post in the database', async () => {
      await request(server).post('/api/users/1/posts').send({ text: 'foo' })
      let posts = await db('posts').where('user_id', 1)
      expect(posts).toHaveLength(initialPosts.filter(p => p.user_id == 1).length + 1)
      await request(server).post('/api/users/1/posts').send({ text: 'bar' })
      posts = await db('posts').where('user_id', 1)
      expect(posts).toHaveLength(initialPosts.filter(p => p.user_id == 1).length + 2)
    }, 500)
    test('[21] responds with the newly created user post', async () => {
      let res = await request(server).post('/api/users/1/posts').send({ text: 'foo' })
      expect(res.body).toHaveProperty('id')
      expect(res.body).toMatchObject({ text: 'foo' })
    }, 500)
    test('[22] responds with a 404 if user id does not exist', async () => {
      let res = await request(server).post('/api/users/111/posts').send({ text: 'foo' })
      expect(res.status).toBe(404)
    }, 500)
    test('[23] responds with a 400 if missing text', async () => {
      let res = await request(server).post('/api/users/1/posts').send({ no: 'foo' })
      expect(res.status).toBe(400)
    }, 500)
    test('[24] responds with the correct error message if missing text', async () => {
      let res = await request(server).post('/api/users/1/posts').send({ no: 'foo' })
      expect(res.body.message).toMatch(/missing required text/i)
    }, 500)
  })
})
