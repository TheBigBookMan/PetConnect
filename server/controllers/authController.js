const db = require("../connection/database");

// TODO will need to incorporate JWT for security and probably some other stuff

const authHttp = {
    // TODO currently a very shit version
    login: async (req, res) => {
        const { username, password } = req.body;
        const sql =
            "SELECT UserID, Username, Email FROM User WHERE Username = ? AND Password = ?";

        try {
            db.query(sql, [username, password], (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(404).json({
                        error: "Failed to login, please try again.",
                    });
                    return;
                }
                console.log(result);
                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.status(404).json({
                        message: "Please check your credentials and try again.",
                    });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error connecting to database." });
        }
    },
    getProfileInfo: async (req, res) => {
        const { userId } = req.params;
        const sql = "SELECT * FROM User WHERE UserID = ?";

        try {
            db.query(sql, [userId], (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(404).json({
                        error: "Failed to retrieve profile",
                    });
                    return;
                }

                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.status(404).json({ message: "Profile not found." });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error accessing the database." });
        }
    },
};

module.exports = authHttp;
