const request = require('supertest')
const server = require('./api/server')
const db = require('./data/db-config')
const { schemes } = require('./data/seeds/01-schemes')
const { steps } = require('./data/seeds/02-steps')

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
  describe('[GET] /api/schemes', () => {
    test('[1] gets all the schemes from db, including schemes _without_ steps (LEFT VS. INNER JOIN !!!)', async () => {
      const res = await request(server).get('/api/schemes')
      expect(res.body).toHaveLength(schemes.length)
    }, 500)
    test('[2] the schemes returned have a `scheme_id` key', async () => {
      const res = await request(server).get('/api/schemes')
      res.body.forEach((scheme) => {
        expect(scheme).toHaveProperty('scheme_id')
      })
    }, 500)
    test('[3] the schemes returned have a `scheme_name` key', async () => {
      const res = await request(server).get('/api/schemes')
      res.body.forEach((scheme) => {
        expect(scheme).toHaveProperty('scheme_name')
      })
    }, 500)
    test('[4] the schemes returned have a `number_of_steps` key', async () => {
      const res = await request(server).get('/api/schemes')
      res.body.forEach((scheme) => {
        expect(scheme).toHaveProperty('number_of_steps')
      })
    }, 500)
    test('[5] the schemes arrive sorted by `scheme_id` ascending', async () => {
      const res = await request(server).get('/api/schemes')
      res.body.forEach((scheme, idx) => {
        expect(scheme.scheme_id).toBe(idx + 1)
      })
    }, 500)
    test('[6] each scheme returned has the correct `number_of_steps`', async () => {
      const res = await request(server).get('/api/schemes')
      const stepCounts = [[1, 3], [2, 2], [3, 3], [4, 3], [5, 1], [6, 4], [7, 0]]
      res.body.forEach((scheme) => {
        const count = stepCounts.find(sc => sc[0] == scheme.scheme_id)[1]
        expect(scheme.number_of_steps).toBe(count)
      })
    }, 500)
  })
  describe('[GET] /api/schemes/:scheme_id', () => {
    test('[7] the scheme returned has the correct `scheme_id` _number_', async () => {
      const res = await request(server).get('/api/schemes/2')
      expect(res.body).toHaveProperty('scheme_id', 2)
    }, 500)
    test('[8] the scheme returned has the correct `scheme_name`', async () => {
      const res = await request(server).get('/api/schemes/2')
      expect(res.body).toHaveProperty('scheme_name', schemes[1].scheme_name)
    }, 500)
    test('[9] the scheme returned has a `steps` property which is an array', async () => {
      const res = await request(server).get('/api/schemes/2')
      expect(res.body.steps).toBeInstanceOf(Array)
    }, 500)
    test('[10] the scheme returned has an empty `steps` array if the scheme has no steps', async () => {
      const res = await request(server).get('/api/schemes/7')
      expect(res.body.steps).toBeInstanceOf(Array)
      expect(res.body.steps).toHaveLength(0)
    }, 500)
    test('[11] the scheme returned has the correct number of steps', async () => {
      const stepCounts = [[1, 3], [2, 2], [3, 3], [4, 3], [5, 1], [6, 4], [7, 0]]
      for (let idx = 0; idx < stepCounts.length; idx++) {
        const res = await request(server).get('/api/schemes/' + stepCounts[idx][0])
        expect(res.body.steps).toHaveLength(stepCounts[idx][1])
      }
    }, 500)
    test('[12] each step inside the scheme returned has `step_id`, `step_number` and `instructions` keys', async () => {
      const res = await request(server).get('/api/schemes/2')
      res.body.steps.forEach(st => {
        expect(st).toHaveProperty('step_id')
        expect(st).toHaveProperty('step_number')
        expect(st).toHaveProperty('instructions')
      })
    }, 500)
    test('[13] the steps inside the scheme returned are ordered by `step_number` ascending', async () => {
      const res = await request(server).get('/api/schemes/2')
      expect(res.body.steps).toMatchObject([
        { step_number: 1, instructions: 'collect all the sheep in Scotland' },
        { step_number: 2, instructions: 'profit' },
      ])
    }, 500)
    test('[14] responds with 404 and proper error on non-existing `scheme_id`', async () => {
      const res = await request(server).get('/api/schemes/222')
      expect(res.status).toBe(404)
      expect(res.body).toHaveProperty('message', 'scheme with scheme_id 222 not found')
    }, 500)
  })
  describe('[GET] /api/schemes/:scheme_id/steps', () => {
    test('[15] returns the correct number of steps for a `scheme_id`', async () => {
      const stepCounts = [[1, 3], [2, 2], [3, 3], [4, 3], [5, 1], [6, 4], [7, 0]]
      for (let idx = 0; idx < stepCounts.length; idx++) {
        const res = await request(server).get(`/api/schemes/${stepCounts[idx][0]}/steps`)
        expect(res.body).toHaveLength(stepCounts[idx][1])
      }
    }, 500)
    test('[16] the steps returned are ordered by `step_number` ascending', async () => {
      const res = await request(server).get('/api/schemes/2/steps')
      expect(res.body[0]).toMatchObject(
        { step_number: 1 },
      )
      expect(res.body[1]).toMatchObject(
        { step_number: 2 },
      )
    }, 500)
    test('[17] the steps returned have the proper `step_number`, `step_id`, `instructions` and `scheme_name`', async () => {
      const res = await request(server).get('/api/schemes/5/steps')
      expect(res.body[0]).toMatchObject(
        { step_number: 1, instructions: 'quest and quest some more', scheme_name: 'Find the Holy Grail' },
      )
    }, 500)
    test('[18] responds with 404 and proper error on non-existing `scheme_id`', async () => {
      const res = await request(server).get('/api/schemes/222/steps')
      expect(res.status).toBe(404)
      expect(res.body).toHaveProperty('message', 'scheme with scheme_id 222 not found')
    }, 500)
  })
  describe('[POST] /api/schemes', () => {
    test('[19] can create a new scheme in the database', async () => {
      await request(server).post('/api/schemes').send({ scheme_name: 'foo' })
      const updatedSchemes = await db('schemes')
      expect(updatedSchemes).toHaveLength(schemes.length + 1)
    }, 500)
    test('[20] responds with 201 status code', async () => {
      const res = await request(server).post('/api/schemes').send({ scheme_name: 'foo' })
      expect(res.status).toBe(201)
    }, 500)
    test('[21] responds with the newly created scheme record', async () => {
      const res = await request(server).post('/api/schemes').send({ scheme_name: 'foo' })
      expect(res.body).toHaveProperty('scheme_id', 8)
      expect(res.body).toMatchObject({ scheme_name: 'foo' })
    }, 500)
    test('[22] responds with 400 and proper message on missing or bad `scheme_name`', async () => {
      let res = await request(server).post('/api/schemes').send({ scheme_name: null })
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid scheme_name')
      res = await request(server).post('/api/schemes').send({})
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid scheme_name')
      res = await request(server).post('/api/schemes').send({ scheme_name: 7 })
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid scheme_name')
    }, 500)
  })
  describe('[POST] /api/schemes/:scheme_id/steps', () => {
    test('[23] can create a new step in the database', async () => {
      await request(server).post('/api/schemes/7/steps').send({ instructions: 'foo', step_number: 60 })
      const updatedSteps = await db('steps')
      expect(updatedSteps).toHaveLength(steps.length + 1)
    }, 500)
    test('[24] responds with 201 status code', async () => {
      const res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'foo', step_number: 60 })
      expect(res.status).toBe(201)
    }, 500)
    test('[25] responds with the complete list of steps for the given `scheme_id` including the new one', async () => {
      let res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'foo', step_number: 60 })
      expect(res.body).toHaveLength(1)
      res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'bar', step_number: 61 })
      expect(res.body).toHaveLength(2)
    }, 500)
    test('[26] responds with well formed steps ordered by `step_number` ascending', async () => {
      let res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'bar', step_number: 20 })
      expect(res.body).toMatchObject([{ instructions: 'bar', step_number: 20 }])
      res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'foo', step_number: 10 })
      expect(res.body).toMatchObject([{ instructions: 'foo', step_number: 10 }, { instructions: 'bar', step_number: 20 }])
    }, 500)
    test('[27] responds with 400 and proper message on missing or bad `step_number` or `instructions`', async () => {
      let res = await request(server).post('/api/schemes/7/steps').send({ instructions: null, step_number: 20 })
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid step')
      res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'foo', step_number: 'bar' })
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid step')
      res = await request(server).post('/api/schemes/7/steps').send({ step_number: 20 })
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid step')
      res = await request(server).post('/api/schemes/7/steps').send({ instructions: 'foo', step_number: -1 })
      expect(res.status).toBe(400)
      expect(res.body).toHaveProperty('message', 'invalid step')
    }, 500)
  })
})
