const db = require("../connection/database");

// TODO will need to incorporate JWT for security and probably some other stuff

const authHttp = {
    login: async (req, res) => {
        const sql = "";
    },
    getProfileInfo: async (req, res) => {
        const { userId } = req.params;
        const sql = "SELECT * FROM User WHERE UserID = ?";

        try {
            db.query(sql, [userId], (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({
                        error: "Failed to retrieve profile",
                    });
                    return;
                }

                if (result.length > 0) {
                    res.json(result[0]);
                } else {
                    res.status(400).json({ message: "Profile not found." });
                }
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Error accessing the database." });
        }
    },
};
