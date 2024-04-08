const router = require("express").Router();
const mapController = require("../../controllers/mapController");

// ? Route /api/map/
// ? Route /
// TODO changeto getMapItems or something
router.route("/").get(mapController.getAllMaps);

module.exports = router;
