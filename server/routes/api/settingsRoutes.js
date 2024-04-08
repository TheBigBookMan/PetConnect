const router = require("express").Router();
const settingsController = require("../../controllers/settingsController");

// ? Route /api/settings/
// ? Route /
// TODO something like update setting
router.route("/").get(settingsController.getAllSettings);

module.exports = router;
