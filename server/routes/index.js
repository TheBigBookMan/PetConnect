const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");

// ? API route
router.use("/api", apiRoutes);

// ? Auth route
router.use("/auth", authRoutes);

router.use((req, res) => res.status(404).send("Wrong route!"));

module.exports = router;
