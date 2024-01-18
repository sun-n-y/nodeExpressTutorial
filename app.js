const express = require('express');
const app = express();

//people router
const people = require('./routes/people');
//login router
const login = require('./routes/auth');

//static assets
app.use(express.static('./methods-public'));

//how to access form data from post request, use express built in middleware to add data to the body of the request
app.use(express.urlencoded({ extended: false }));

//parse json - to get access to form data when using javascript for form setup
app.use(express.json());

//for the path /api/people, use people router
app.use('/api/people', people);

//for the path /login, use login router
app.use('/login', login);

////http methods
//located in routers

app.listen(5000, () => {
  console.log('server listening to port 5000');
});
