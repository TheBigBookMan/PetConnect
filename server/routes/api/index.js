const router = require("express").Router();
const calendarRoutes = require("./calendarRoutes");
const forumRoutes = require("./forumRoutes");
const mapRoutes = require("./mapRoutes");
const messageRoutes = require("./messageRoutes");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const serviceRoutes = require("./serviceRoutes");
const settingsRoutes = require("./settingsRoutes");

router.use("/calendar", calendarRoutes);
router.use("/forum", forumRoutes);
router.use("/map", mapRoutes);
router.use("/message", messageRoutes);
router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/service", serviceRoutes);
router.use("/settings", settingsRoutes);

module.exports = router;
