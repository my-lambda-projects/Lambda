const request = require('supertest')
const server = require('./api/server')
const db = require('./data/db-config')
const bcrypt = require('bcryptjs')
const jwtDecode = require('jwt-decode')

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

it('[0] sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  describe('[POST] /api/auth/login', () => {
    it('[1] responds with the correct message on valid credentials', async () => {
      const res = await request(server).post('/api/auth/login').send({ username: 'bob', password: '1234' })
      expect(res.body.message).toMatch(/bob is back/i)
    }, 500)
    it('[2] responds with the correct status and message on invalid credentials', async () => {
      let res = await request(server).post('/api/auth/login').send({ username: 'bobsy', password: '1234' })
      expect(res.body.message).toMatch(/invalid credentials/i)
      expect(res.status).toBe(401)
      res = await request(server).post('/api/auth/login').send({ username: 'bob', password: '12345' })
      expect(res.body.message).toMatch(/invalid credentials/i)
      expect(res.status).toBe(401)
    }, 500)
    it('[3] responds with a token with correct { subject, username, role_name, exp, iat }', async () => {
      let res = await request(server).post('/api/auth/login').send({ username: 'bob', password: '1234' })
      let decoded = jwtDecode(res.body.token)
      expect(decoded).toHaveProperty('iat')
      expect(decoded).toHaveProperty('exp')
      expect(decoded).toMatchObject({
        subject: 1,
        role_name: 'admin',
        username: 'bob',
      })
      res = await request(server).post('/api/auth/login').send({ username: 'sue', password: '1234' })
      decoded = jwtDecode(res.body.token)
      expect(decoded).toHaveProperty('iat')
      expect(decoded).toHaveProperty('exp')
      expect(decoded).toMatchObject({
        subject: 2,
        role_name: 'instructor',
        username: 'sue',
      })
    }, 500)
  })
  describe('[POST] /api/auth/register', () => {
    it('[4] creates a new user in the database when client does not provide role_name', async () => {
      await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234' })
      const devon = await db('users').where('username', 'devon').first()
      expect(devon).toMatchObject({ username: 'devon' })
    }, 500)
    it('[5] creates a new user with role_id 3 (the default role) when client does not provide role_name', async () => {
      await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234' })
      const devon = await db('users').where('username', 'devon').first()
      expect(devon).toMatchObject({ role_id: 2 })
    }, 500)
    it('[6] creates a new user with role_id 2 (existing role instructor) when client provides role_name instructor', async () => {
      await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: 'instructor' })
      const devon = await db('users').where('username', 'devon').first()
      expect(devon).toMatchObject({ role_id: 3 })
    }, 500)
    it('[7] creates a new user with a brand new role_id when client provides a role_name that does not exist yet', async () => {
      await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: 'valid' })
      const devon = await db('users').where('username', 'devon').first()
      expect(devon).toMatchObject({ role_id: 4 })
    }, 500)
    it('[8] saves the user with a bcrypted password instead of plain text', async () => {
      await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234' })
      const devon = await db('users').where('username', 'devon').first()
      expect(bcrypt.compareSync('1234', devon.password)).toBeTruthy()
    }, 500)
    it('[9] responds with the correct user (when omitting role_name from the request)', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234' })
      expect(res.body).toMatchObject({ user_id: 3, username: 'devon', role_name: 'student' })
    }, 500)
    it('[10] responds with the correct user (when choosing an existing role_name)', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: 'instructor' })
      expect(res.body).toMatchObject({ user_id: 3, username: 'devon', role_name: 'instructor' })
    }, 500)
    it('[11] responds with the correct user (when choosing a valid role_name not in db)', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: 'angel' })
      expect(res.body).toMatchObject({ user_id: 3, username: 'devon', role_name: 'angel' })
    }, 500)
    it('[12] leading and trailing whitespace is trimmed from the role_id', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: '    angel    ' })
      expect(res.body).toMatchObject({ user_id: 3, username: 'devon', role_name: 'angel' })
    }, 500)
    it('[13] leading and trailing whitespace is trimmed from the role_id before validating', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: '              angel              ' })
      expect(res.body).toMatchObject({ user_id: 3, username: 'devon', role_name: 'angel' })
    }, 500)
    it('[14] responds with proper status and message on role_name over 32 chars after trimming', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' })
      expect(res.body.message).toMatch(/can not be longer than 32 chars/i)
      expect(res.status).toBe(422)
    }, 500)
    it('[15] responds with proper status and message if a client tries to register as an admin', async () => {
      let res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: 'admin' })
      expect(res.body.message).toMatch(/can not be admin/i)
      expect(res.status).toBe(422)
      res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234', role_name: '    admin     ' })
      expect(res.body.message).toMatch(/can not be admin/i)
      expect(res.status).toBe(422)
    }, 500)
    it('[16] responds with proper status on success', async () => {
      const res = await request(server).post('/api/auth/register').send({ username: 'devon', password: '1234' })
      expect(res.status).toBe(201)
    }, 500)
  })
  describe('[GET] /api/users', () => {
    it('[17] requests without a token are bounced with proper status and message', async () => {
      const res = await request(server).get('/api/users')
      expect(res.body.message).toMatch(/token required/i)
    })
    it('[18] requests with an invalid token are bounced with proper status and message', async () => {
      const res = await request(server).get('/api/users').set('Authorization', 'foobar')
      expect(res.body.message).toMatch(/token invalid/i)
    })
    it('[19] requests with a valid token obtain a list of users', async () => {
      let res = await request(server).post('/api/auth/login').send({ username: 'bob', password: '1234' })
      res = await request(server).get('/api/users').set('Authorization', res.body.token)
      expect(res.body).toMatchObject([{ "role_name": "admin", "user_id": 1, "username": "bob" }, { "role_name": "instructor", "user_id": 2, "username": "sue" }])
    })
  })
  describe('[GET] /api/users/:user_id', () => {
    it('[20] requests with a token with role_name admin obtain the user details', async () => {
      let res = await request(server).post('/api/auth/login').send({ username: 'bob', password: '1234' })
      res = await request(server).get('/api/users/1').set('Authorization', res.body.token)
      expect(res.body).toMatchObject({ "role_name": "admin", "user_id": 1, "username": "bob" })
    })
    it('[21] requests with a token with a role_name that is not admin are bounced with proper status and message', async () => {
      let res = await request(server).post('/api/auth/login').send({ username: 'sue', password: '1234' })
      res = await request(server).get('/api/users/1').set('Authorization', res.body.token)
      expect(res.body.message).toMatch(/this is not for you/i)
      expect(res.status).toBe(403)
    })
  })
})
