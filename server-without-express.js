//set up server with http module
const http = require('http');
const { readFileSync } = require('fs');

//manually get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

//cb invoked every time user hits our server
const server = http.createServer((req, res) => {
  //error if requesting wrong
  const url = req.url;
  if (url === '/') {
    //provide meta data about our response, so browser knows how to decode it
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    //we have to res end
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About Page</h1>');
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyles);
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homeImage);
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1>Error Page</h1>');
    res.end();
  }
});

//port
server.listen(5000);
