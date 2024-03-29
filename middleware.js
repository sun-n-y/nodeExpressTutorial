const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan');

const app = express();

//request > middleware > response
//middle ware is in separate file
//app use for middleware function to be applied to all routes

//for any paths after api if included path
// app.use([logger, authorize]);

//morgan login middleware
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(5000, () => {
  console.log('server listening to port 5000');
});
