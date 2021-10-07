const Router = require("express");
const router = new Router();
const usersRouter = require("./usersRouter");
const authRouter = require("./authRouter.js");

const { checkToken } = require("../middlewares");

router.use("/auth", authRouter);
router.use("/users", checkToken, usersRouter);

module.exports = router;
