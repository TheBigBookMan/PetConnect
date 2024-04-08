const router = require("express").Router();
const postController = require("../../controllers/postController");

// ? Route /api/post/
// ? Route /
router.route("/").get(postController.getAllPosts);

module.exports = router;
