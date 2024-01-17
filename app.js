const { products } = require('./data');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">products</a> ');
});

app.get('/api/products', (req, res) => {
  //to send back everything
  //   res.json(products);

  //sending back specifics
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// route parameter
app.get('/api/products/:productID', (req, res) => {
  //   console.log(req.params);
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );

  if (!singleProduct) {
    return res.status(404).send('product does not exist');
  }

  return res.json(singleProduct);
});

//a more complex route param
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app.listen(5000, () => {
  console.log('server listening to port 5000');
});
