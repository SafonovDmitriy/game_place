const Router = require("express");
const router = new Router();
const UsersController = require("../controllers/usersControllers");

router.get("/", UsersController.getUser);
router.get("/logout", UsersController.logOut);

module.exports = router;
