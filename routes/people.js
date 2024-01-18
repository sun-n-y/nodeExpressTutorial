//express router
const express = require('express');

//router instance, that takes care of the routing instead of the app,
const router = express.Router();

//import controllers
const {
  createPerson,
  getPeople,
  createPersonTC,
  updatePerson,
  deletePerson,
} = require('../controllers/people');

router.get('/', getPeople);

router.post('/', createPerson);

router.post('/tc', createPersonTC);

router.put('/:id', updatePerson);

router.delete('/:id', deletePerson);

module.exports = router;
