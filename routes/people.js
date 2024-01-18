//express router
const express = require('express');

//router instance, that takes care of the routing instead of the app,
const router = express.Router();

let { people } = require('../data');

//get - read data
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people });
  res.end();
});

//post with javascript - insert data
router.post('/', (req, res) => {
  const { name } = req.body;
  //handle blanks on server
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please enter name' });
  }

  return res.status(200).json({ success: true, person: name });
});

//post using thunder client - insert data
router.post('/tc', (req, res) => {
  const { name } = req.body;
  //handle blanks on server
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please enter name' });
  }
  return res
    .status(200)
    .json({ success: true, data: [...people, { id: 6, name }] });
});

//put - update/edit data
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

//delete person from array
router.delete('/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `no person with, id: ${req.params.id}` });
  }

  const newPeople = people.filter((person) => {
    return person.id != Number(req.params.id);
  });

  res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
