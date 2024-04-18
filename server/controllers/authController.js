const db = require("../connection/database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// TODO will need to incorporate JWT for security and probably some other stuff

const SECRET_KEY = process.env.JWT_SECRET;

const authHttp = {
    // TODO currently a very shit version
    login: async (req, res) => {
        const { username, password } = req.body;
        const sql =
            "SELECT UserID, Username, Email, Password FROM User WHERE Username = ?";

        try {
            db.query(sql, [username], async (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(404).json({
                        error: "Failed to login, please try again.",
                    });
                    return;
                }

                if (result.length > 0) {
                    const user = result[0];

                    // ? Comparing hashed password
                    const validPassword = await bcrypt.compare(
                        password,
                        user.Password
                    );
                    if (!validPassword) {
                        return res
                            .status(401)
                            .json({ message: "Invalid credentials" });
                    }

                    const token = jwt.sign(
                        {
                            id: user.UserID,
                            username: user.Username,
                            email: user.Email,
                        },
                        SECRET_KEY,
                        { expiresIn: "24h" }
                    );

                    // ? Sending the token in a cookie
                    res.cookie("token", token, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                        maxAge: 24 * 60 * 60 * 1000,
                    });

                    res.json({
                        message: "Authentication successful",
                        user: {
                            id: user.UserID,
                            username: user.Username,
                            email: user.Email,
                        },
                    });
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
        // !!! TEMP
        const { userId } = req.params;
        // ? Proper
        // const userId = req.user.userID;
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
