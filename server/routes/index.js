const Router = require("express");
const router = new Router();
const usersRouter = require("./usersRouter");

const { checkToken } = require("../middlewares");

router.use("/users", checkToken, usersRouter);

module.exports = router;
