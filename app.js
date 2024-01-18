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

//post with javascript
app.post('/api/people', (req, res) => {
  const { name } = req.body;
  //handle blanks on server
  if (!name) {
    return res.status(400).json({ success: false, msg: 'please enter name' });
  }

  return res.status(200).json({ success: true, person: name });
});

//post - insert data
app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  //handle blanks on server
  res.status(401).send('please provide value');
});

app.listen(5000, () => {
  console.log('server listening to port 5000');
});
