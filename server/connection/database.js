const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

// Export the pool for use in other files
module.exports = db;
