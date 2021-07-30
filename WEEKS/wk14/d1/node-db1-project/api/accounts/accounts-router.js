const router = require('express').Router();
const {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
} = require('./accounts-middleware');
const Accounts = require('./accounts-model');

// getAll, getById, create, updateById, deleteById 
router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(accounts => {
      res.json(accounts);
    })
    .catch(next);
});

router.get('/:id', checkAccountId, (req, res, next) => {
  res.json(req.account);
});

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  Accounts.create(req.body)
    .then(account => {
      res.status(201).json(account);
    })
    .catch(next);
});

router.put('/:id', checkAccountId, checkAccountPayload, (req, res, next) => {
  Accounts.updateById(req.params.id, req.body)
    .then(updated => {
      res.json(updated);
    })
    .catch(next);
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  Accounts.deleteById(req.params.id)
    .then(deleted => {
      res.json(deleted);
      // res.json(req.account); //this uses less db calls
    })
    .catch(next);
});

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});

module.exports = router;
