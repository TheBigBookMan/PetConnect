const router = require("express").Router();
const userController = require("../../controllers/userController");

// ? Route /api/user/
// ? Route /
router.route("/").get(userController.getAllUsers);

// ? Route /api/user/userId
// router.route("/:userId").get(userController.getUser);

module.exports = router;
