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

//way 1
// router.get('/', getPeople);
// router.post('/', createPerson);
// router.post('/tc', createPersonTC);
// router.put('/:id', updatePerson);
// router.delete('/:id', deletePerson);

//way 2 - chaining the above
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonTC);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;
