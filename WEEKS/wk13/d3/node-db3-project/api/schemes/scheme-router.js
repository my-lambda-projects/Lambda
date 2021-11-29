// DO NOT CHANGE THIS FILE
const express = require('express')
const { checkSchemeId, validateScheme, validateStep } = require('./scheme-middleware')
const Schemes = require('./scheme-model.js')

const router = express.Router()

/**
  [GET] /api/schemes

  response:
  [
    {
      "scheme_id": 1,
      "scheme_name": "World Domination",
      "number_of_steps": 3
    },
    {
      "scheme_id": 2,
      "scheme_name": "Get Rich Quick",
      "number_of_steps": 2
    },
    // etc
  ]
 */
router.get('/', (req, res, next) => {
  Schemes.find()
    .then(schemes => {
      res.json(schemes)
    })
    .catch(next)
})

/*
  [GET] /api/schemes/2

  response:
  {
    "scheme_id": 2,
    "scheme_name": "Get Rich Quick",
    "steps": [
      {
          "step_id": 5,
          "step_number": 1,
          "instructions": "collect all the sheep in Scotland"
      },
      {
          "step_id": 4,
          "step_number": 2,
          "instructions": "profit"
      }
    ]
  }
*/
router.get('/:scheme_id', checkSchemeId, (req, res, next) => {
  const { scheme_id } = req.params

  Schemes.findById(scheme_id)
    .then(scheme => {
      res.json(scheme)
    })
    .catch(next)
})

/*
  [GET] /api/schemes/2/steps

  response:
  [
    {
      "step_id": 5,
      "step_number": 1,
      "instructions": "collect all the sheep in Scotland",
      "scheme_name": "Get Rich Quick"
    },
    {
      "step_id": 4,
      "step_number": 2,
      "instructions": "profit",
      "scheme_name": "Get Rich Quick"
    }
  ]
*/
router.get('/:scheme_id/steps', checkSchemeId, (req, res, next) => {
  const { scheme_id } = req.params

  Schemes.findSteps(scheme_id)
    .then(steps => {
      res.json(steps)
    })
    .catch(next)
})

/*
  [POST] /api/schemes { "scheme_name": "Take Ovah" }

  response:
  {
    "scheme_id": 8,
    "scheme_name": "Take Ovah"
  }
*/
router.post('/', validateScheme, (req, res, next) => {
  const scheme = req.body

  Schemes.add(scheme)
    .then(scheme => {
      res.status(201).json(scheme)
    })
    .catch(next)
})

/*
  [POST] /api/schemes/5/steps { "instructions": "and yet more questing", "step_number": 2 }

  response:
  [
    {
      "step_id": 12,
      "step_number": 1,
      "instructions": "quest and quest some more",
      "scheme_name": "Find the Holy Grail"
    },
    {
      "step_id": 17,
      "step_number": 2,
      "instructions": "and yet more questing",
      "scheme_name": "Find the Holy Grail"
    }
  ]
*/
router.post('/:scheme_id/steps', checkSchemeId, validateStep, (req, res, next) => {
  const step = req.body
  const { scheme_id } = req.params

  Schemes.addStep(scheme_id, step)
    .then(allSteps => {
      res.status(201).json(allSteps)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: 'Finding the real error is 90% of the bug fix',
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
