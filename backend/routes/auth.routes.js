const express = require('express');
const router = express.Router();

// Mock user data for demonstration purposes
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' },
];

// Route for user login
router.post('/login', (req, res) => {
    // Check if username and password are correct
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If authentication succeeds, generate a token and return it
    // For demonstration purposes, we're just sending a dummy token
    const token = 'dummy_token'; // You would generate a proper token here
    res.json({ token });
});

// Route for user registration
router.post('/register', (req, res) => {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Check if username already exists
    if (users.some(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user object
    const newUser = { id: users.length + 1, username, password };

    // Add the new user to the users array (or database)
    users.push(newUser);

    // Return a success message
    res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
