const db = require("../connection/database");
const fs = require("fs");

const seedSQL = fs.readFileSync("../server/db/seed.sql", { encoding: "utf-8" });
const sqlStatements = seedSQL
    .split(";\n")
    .filter((statement) => statement.trim());

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database.");

    // Execute SQL file
    sqlStatements.forEach((statement, index) => {
        db.query(statement, (err, result) => {
            if (err) throw err;
            console.log(`Statement ${index + 1} executed successfully.`);
        });
    });
});
