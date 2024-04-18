// backend/index.js

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models/models");
const authRoutes = require("./routes/auth.routes");
const taskRoutes = require("./routes/task.routes");
const sequelize = require('./config/config');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Start server
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
