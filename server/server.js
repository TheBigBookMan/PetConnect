const express = require("express");
const routes = require("./routes");
const db = require("./connection/database");
const expressJwt = require("express-jwt");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

const SECRET_KEY = process.env.JWT_SECRET;

//? CORS configuration
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

//? Use the CORS middleware with the options above
app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ? Check cookies
app.use(cookieParser());

// ? JWT for protected routes- everything except login and signup
app.use(
    expressJwt({
        secret: SECRET_KEY,
        algorithms: ["HS256"],
        getToken: (req) => req.cookies.token,
    }).unless({ path: ["/auth/login", "/auth/signup"] })
);

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected");
});

// ? Implement routes
app.use(routes);

app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({
            message: "Unauthorized Access - No token provided!",
        });
    } else {
        next(err);
    }
});

app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server is running on PORT http://localhost:${PORT}`)
);
