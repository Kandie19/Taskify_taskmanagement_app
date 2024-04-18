// auth.middleware.js

const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  // Get the JWT token from the request headers
  const token = req.headers.authorization;

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your_secret_key'); // Replace 'your_secret_key' with your actual secret key

    // Attach the user ID to the request object for further use
    req.user = { id: decoded.userId };

    // Call next middleware or route handler
    next();
  } catch (error) {
    // Token is invalid
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authenticateUser;

