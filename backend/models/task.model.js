// backend/models/task.model.js

module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define("task", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        },
        priority: {
            type: Sequelize.ENUM('low', 'medium', 'high'),
            defaultValue: 'medium'
        },
        due_date: {
            type: Sequelize.DATE
        },
        location: {
            type: Sequelize.STRING
        },
        is_completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Task;
};
