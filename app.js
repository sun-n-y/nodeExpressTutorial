const express = require('express');

const app = express();

//request > middleware > response

//middleware function
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //pass onto next or else error
  next();
};

app.get('/', logger, (req, res) => {
  res.send('Home');
});

app.get('/about', logger, (req, res) => {
  res.send('About');
});

app.listen(5000, () => {
  console.log('server listening to port 5000');
});
