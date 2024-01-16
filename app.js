//set up server with http module
const http = require('http');

//cb invoked every time user hits our server
const server = http.createServer((req, res) => {
  //error if requesting wrong
  const url = req.url;
  if (url === '/') {
    //provide meta data about our response, so browser knows how to decode it
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Homepage</h1>');
    //we have to res end
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Error Page</h1>');
    res.end();
  }
});

//port
server.listen(5000);
