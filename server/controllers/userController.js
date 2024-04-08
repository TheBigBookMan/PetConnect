const db = require("../connection/database");

const userHttp = {
    getAllUsers: async (req, res) => {
        const sql = `SELECT * FROM User`;
        try {
            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Cannot get all authors." });
        }
    },
};

module.exports = userHttp;
