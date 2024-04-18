// config.js

const Sequelize = require('sequelize');

// Define database connection parameters
const sequelize = new Sequelize({
  database: 'task_manager',
  username: 'root',
  password: '$Ummer1992',
  host: 'localhost',
  dialect: 'mysql', // Or any other supported dialect: 'mysql' | 'sqlite' | 'postgres' | 'mssql'
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

