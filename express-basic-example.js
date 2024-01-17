//express server
const express = require('express');

//instance created
const app = express();

//app.get
//every time user sends a get request for root cb executes
app.get('/', (req, res) => {
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

//for request pages that don't exist
//all handles all verbs
// path = * = all paths not specified
app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

//app.post
//app.put
//app.delete

//app.all
//app.use

//app.listen
app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
