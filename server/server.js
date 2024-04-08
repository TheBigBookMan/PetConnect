const express = require("express");
const routes = require("./routes");
const db = require("./connection/database");
const PORT = process.env.PORT || 3001;
const app = express();

//? CORS configuration
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: false,
    optionsSuccessStatus: 204,
};

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected");
});

// Use the CORS middleware with the options above
// app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, "0.0.0.0", () =>
    console.log(`Server is running on PORT http://localhost:${PORT}`)
);
