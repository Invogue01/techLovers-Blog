const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
