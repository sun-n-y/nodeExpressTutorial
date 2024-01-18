const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === 'tim') {
    req.user = { name: 'tim', id: 3 };
    next();
  } else {
    res.status(401).send('unauthorized');
  }
};

module.exports = authorize;
