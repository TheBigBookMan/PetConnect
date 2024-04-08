const tables = require("./tables");
const junctions = require("./junctions");
const db = require("../connection/database");

tables.forEach((query) => {
    db.query(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success");
    });
});

junctions.forEach((query) => {
    db.query(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success");
    });
});

db.end((err) => {
    if (err) {
        console.log("Error closing the database connection", err);
    } else {
        console.log("Database connection closed");
    }
});
