const router = require("express").Router();
const forumController = require("../../controllers/forumController");

// ? Route /api/forum/
// ? Route /
router.route("/").get(forumController.getAllForums);

module.exports = router;
