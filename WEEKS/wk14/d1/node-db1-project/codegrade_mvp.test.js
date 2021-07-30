const request = require('supertest')
const server = require('./api/server')
const db = require('./data/db-config')
const { accounts } = require('./data/seeds/02-accounts')

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
  describe('[GET] /api/accounts', () => {
    test('[1] can get the correct number of accounts', async () => {
      let res = await request(server).get('/api/accounts')
      expect(res.body).toHaveLength(accounts.length)
    }, 500)
    test('[2] gets the empty array if there are no accounts', async () => {
      await db('accounts').truncate()
      let res = await request(server).get('/api/accounts')
      expect(res.body).toHaveLength(0)
    }, 500)
  })
  describe('[GET] /api/accounts/:id', () => {
    test('[3] can get the correct account', async () => {
      let res = await request(server).get('/api/accounts/1')
      expect(res.body).toMatchObject(accounts[0])
      res = await request(server).get('/api/accounts/2')
      expect(res.body).toMatchObject(accounts[1])
    }, 500)
    test('[4] responds with a 404 if the id does not exist', async () => {
      let res = await request(server).get('/api/accounts/111')
      expect(res.status).toBe(404)
    }, 500)
    test('[5] responds with "account not found" if the id does not exist', async () => {
      let res = await request(server).get('/api/accounts/111')
      expect(res.body.message).toMatch(/account not found/i)
    }, 500)
  })
  describe('[POST] /api/accounts', () => {
    test('[6] creates a new account in the database', async () => {
      await request(server).post('/api/accounts').send({ name: 'foo', budget: 1000 })
      let accs = await db('accounts')
      expect(accs).toHaveLength(accounts.length + 1)
      expect(accs[accounts.length]).toMatchObject({ name: 'foo', budget: 1000 })
    })
    test('[7] responds with a 201 and the newly created account', async () => {
      const res = await request(server).post('/api/accounts').send({ name: 'foo', budget: 1000 })
      expect(res.status).toBe(201)
      expect(res.body).toMatchObject({ name: 'foo', budget: 1000 })
    })
    test('[8] trims the leading and trailing whitespace in the name of the new account', async () => {
      const res = await request(server).post('/api/accounts').send({ name: '  foo  ', budget: 1000 })
      expect(res.body).toMatchObject({ name: 'foo', budget: 1000 })
    })
    test('[9] responds with a 400 and proper error if name or budget are undefined', async () => {
      const invalid1 = {}
      const invalid2 = { name: "foo" }
      const invalid3 = { budget: 123 }

      let res = await request(server).post('/api/accounts').send(invalid1)
      expect(res.body.message).toMatch(/name and budget are required/i)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/accounts').send(invalid2)
      expect(res.body.message).toMatch(/name and budget are required/i)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/accounts').send(invalid3)
      expect(res.body.message).toMatch(/name and budget are required/i)
      expect(res.status).toBe(400)
    })
    test('[10] responds with a 400 and proper error if name is not a string', async () => {
      const invalid = { name: 123, budget: 123 }
      let res = await request(server).post('/api/accounts').send(invalid)
      expect(res.body.message).toMatch(/must be a string/i)
      expect(res.status).toBe(400)
    })
    test('[11] responds with a 400 and proper error if name is too short or too big (after trimming)', async () => {
      const invalid1 = { name: "fo", budget: 123 }
      const invalid2 = { name: "  fo   ", budget: 123 }
      const invalid3 = { name: "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901", budget: 123 }
      let res = await request(server).post('/api/accounts').send(invalid1)
      expect(res.body.message).toMatch(/between 3 and 100/i)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/accounts').send(invalid2)
      expect(res.body.message).toMatch(/between 3 and 100/i)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/accounts').send(invalid3)
      expect(res.body.message).toMatch(/between 3 and 100/i)
      expect(res.status).toBe(400)
    })
    test('[12] responds with a 400 and proper error if budget is not a number', async () => {
      const invalid1 = { name: "foo", budget: NaN }
      const invalid2 = { name: "foo", budget: '1000' }
      let res = await request(server).post('/api/accounts').send(invalid1)
      expect(res.body.message).toMatch(/must be a number/i)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/accounts').send(invalid2)
      expect(res.body.message).toMatch(/must be a number/i)
      expect(res.status).toBe(400)
    })
    test('[13] responds with a 400 and proper error if budget is negative or too big', async () => {
      const invalid1 = { name: "foo", budget: -1 }
      const invalid2 = { name: "foo", budget: 1000001 }
      let res = await request(server).post('/api/accounts').send(invalid1)
      expect(res.body.message).toMatch(/too large or too small/i)
      expect(res.status).toBe(400)
      res = await request(server).post('/api/accounts').send(invalid2)
      expect(res.body.message).toMatch(/too large or too small/i)
      expect(res.status).toBe(400)
    })
    test('[14] responds with a 400 and proper error if name already exists in the db', async () => {
      let res = await request(server).post('/api/accounts').send(accounts[0])
      expect(res.body.message).toMatch(/name is taken/i)
      expect(res.status).toBe(400)
    })
  })
  describe('[PUT] /api/accounts/:id', () => {
    test('[15] updates the account in the database', async () => {
      await request(server).put('/api/accounts/1').send({ name: 'foo', budget: 500.50 })
      let account = await db('accounts').where('id', 1).first()
      expect(account).toMatchObject({ name: 'foo', budget: 500.50 })
    })
    test('[16] responds with a 200 and the newly updated account', async () => {
      const res = await request(server).put('/api/accounts/1').send({ name: 'foo', budget: 1000 })
      expect(res.status).toBe(200)
      expect(res.body).toMatchObject({ name: 'foo', budget: 1000 })
    })
    test('[17] responds with a 404 if the id does not exist', async () => {
      let res = await request(server).put('/api/accounts/111').send({ name: 'foo', budget: 1000 })
      expect(res.status).toBe(404)
    }, 500)
    test('[18] responds with a 400 and proper error if name or budget are undefined', async () => {
      const invalid1 = {}
      const invalid2 = { name: "foo" }
      const invalid3 = { budget: 123 }

      let res = await request(server).put('/api/accounts/1').send(invalid1)
      expect(res.body.message).toMatch(/name and budget are required/i)
      expect(res.status).toBe(400)
      res = await request(server).put('/api/accounts/1').send(invalid2)
      expect(res.body.message).toMatch(/name and budget are required/i)
      expect(res.status).toBe(400)
      res = await request(server).put('/api/accounts/1').send(invalid3)
      expect(res.body.message).toMatch(/name and budget are required/i)
      expect(res.status).toBe(400)
    })
    test('[19] responds with a 400 and proper error if name is not a string', async () => {
      const invalid = { name: 123, budget: 123 }
      let res = await request(server).put('/api/accounts/1').send(invalid)
      expect(res.body.message).toMatch(/must be a string/i)
      expect(res.status).toBe(400)
    })
    test('[20] responds with a 400 and proper error if name is too short or too big (after trimming)', async () => {
      const invalid1 = { name: "fo", budget: 123 }
      const invalid2 = { name: "  fo   ", budget: 123 }
      const invalid3 = { name: "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901", budget: 123 }
      let res = await request(server).put('/api/accounts/1').send(invalid1)
      expect(res.body.message).toMatch(/between 3 and 100/i)
      expect(res.status).toBe(400)
      res = await request(server).put('/api/accounts/1').send(invalid2)
      expect(res.body.message).toMatch(/between 3 and 100/i)
      expect(res.status).toBe(400)
      res = await request(server).put('/api/accounts/1').send(invalid3)
      expect(res.body.message).toMatch(/between 3 and 100/i)
      expect(res.status).toBe(400)
    })
    test('[21] responds with a 400 and proper error if budget is not a number', async () => {
      const invalid1 = { name: "foo", budget: NaN }
      const invalid2 = { name: "foo", budget: '1000' }
      let res = await request(server).put('/api/accounts/1').send(invalid1)
      expect(res.body.message).toMatch(/must be a number/i)
      expect(res.status).toBe(400)
      res = await request(server).put('/api/accounts/1').send(invalid2)
      expect(res.body.message).toMatch(/must be a number/i)
      expect(res.status).toBe(400)
    })
    test('[22] responds with a 400 and proper error if budget is negative or too big', async () => {
      const invalid1 = { name: "foo", budget: -1 }
      const invalid2 = { name: "foo", budget: 1000001 }
      let res = await request(server).put('/api/accounts/1').send(invalid1)
      expect(res.body.message).toMatch(/too large or too small/i)
      expect(res.status).toBe(400)
      res = await request(server).put('/api/accounts/1').send(invalid2)
      expect(res.body.message).toMatch(/too large or too small/i)
      expect(res.status).toBe(400)
    })
  })
  describe('[DELETE] /api/accounts/:id', () => {
    test('[23] can delete the correct account', async () => {
      await request(server).delete('/api/accounts/1')
      const account = await db('accounts').where('id', 1).first()
      expect(account).not.toBeDefined()
    }, 500)
    test('[24] responds with a 404 if the id does not exist', async () => {
      let res = await request(server).delete('/api/accounts/111')
      expect(res.status).toBe(404)
    }, 500)
    test('[25] responds with "account not found" if the id does not exist', async () => {
      let res = await request(server).delete('/api/accounts/111')
      expect(res.body.message).toMatch(/account not found/i)
    }, 500)
  })
})
