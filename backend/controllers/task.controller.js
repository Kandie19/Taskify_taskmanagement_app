// backend/controllers/task.controller.js

const db = require("../models/task.model");
const Task = db.task;

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, description, priority, due_date, location } = req.body;

        // Create task
        const newTask = await Task.create({
            title,
            description,
            priority,
            due_date,
            location,
            user_id: req.user.id // Assuming you have middleware to extract user ID from JWT token
        });

        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll({ where: { user_id: req.user.id } });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description, priority, due_date, location } = req.body;

        // Find task by ID
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Update task
        task.title = title;
        task.description = description;
        task.priority = priority;
        task.due_date = due_date;
        task.location = location;

        await task.save();

        res.status(200).json({ message: "Task updated successfully", task });
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        // Find task by ID
        const task = await Task.findByPk(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        // Delete task
        await task.destroy();

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
