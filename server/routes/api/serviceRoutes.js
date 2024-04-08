const router = require("express").Router();
const serviceController = require("../../controllers/serviceController");

// ? Route /api/service/
// ? Route /
router.route("/").get(serviceController.getAllServices);

module.exports = router;
