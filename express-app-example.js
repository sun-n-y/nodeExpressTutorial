const express = require('express');
const path = require('path');

//app instance
const app = express();

//setup static middleware
//
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'navbar-app', 'index.html'));
//used in server side rendering
// });

app.all('*', (req, res) => {
  res.status(404).send('<h1>Cannot Find Source</h1>');
});

app.listen(5000, () => {
  console.log('app listening to port 5000');
});
