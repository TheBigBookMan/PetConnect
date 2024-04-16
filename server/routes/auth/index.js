const router = require("express").Router();
const authController = require("../../controllers/authController");

// router.route("/login").post(authController.login);

// ? /auth/profile/userId
router.route("/profile/:userId").get(authController.getProfileInfo);

module.exports = router;
