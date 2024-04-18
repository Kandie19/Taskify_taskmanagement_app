// backend/routes/task.routes.js

const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

// Middleware to authenticate user (assuming you have authentication middleware)
const authenticateUser = require("../middlewares/auth.middleware");

// Create a new task
router.post("/", authenticateUser, taskController.createTask);

// Get all tasks
router.get("/", authenticateUser, taskController.getAllTasks);

// Update a task
router.put("/:id", authenticateUser, taskController.updateTask);

// Delete a task
router.delete("/:id", authenticateUser, taskController.deleteTask);

module.exports = router;
