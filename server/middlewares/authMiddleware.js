const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send('Access denied');
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch {
    res.status(401).send('Invalid token');
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'Admin') {
    return res.status(403).send('Access denied');
  }
  next();
};

module.exports = { authMiddleware, adminMiddleware };
