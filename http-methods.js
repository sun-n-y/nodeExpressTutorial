const express = require('express');
const app = express();
let { people } = require('./data');

//static assets
app.use(express.static('./methods-public'));

//how to access form data from post request, use express built in middleware to add data to the body of the request
app.use(express.urlencoded({ extended: false }));

//parse json - to get access to form data when using javascript for form setup
app.use(express.json());

////http methods
//get - read data
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
  res.end();
});

//post with javascript - insert data
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  //handle blanks on server
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please enter name' });
  }

  return res.status(200).json({ success: true, person: name });
});

//post using thunder client - insert data
app.post('/api/tc/people', (req, res) => {
  const { name } = req.body;
  //handle blanks on server
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please enter name' });
  }
  return res
    .status(200)
    .json({ success: true, data: [...people, { id: 6, name }] });
});

//post with form element - insert data
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  //handle blanks on server
  res.status(401).send('please provide value');
});

//put - update/edit data
app.put('/api/people/:id', (req, res) => {
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
app.delete('/api/people/:id', (req, res) => {
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

app.listen(5000, () => {
  console.log('server listening to port 5000');
});
