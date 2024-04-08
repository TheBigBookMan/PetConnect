const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

// ? Route /api/calendar/
// ? Route /
// TODO change to getAllItemsCalendar or something
router.route("/").get(calendarController.getAllCalendars);

module.exports = router;
