const router = require("express").Router();
const messageController = require("../../controllers/messageController");

// ? Route /api/message/
// ? Route /
router.route("/").get(messageController.getAllMessages);

module.exports = router;
