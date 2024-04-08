const router = require("express").Router();
const userController = require("../../controllers/userController");

// ? Route /api/user/
// ? Route /
router.route("/").get(userController.getAllUsers);

module.exports = router;
