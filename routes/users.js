var express = require('express');
var router = express.Router();

const UsersModifyMethod = require("../controllers/users_controller");
const varify = require("../controllers/verification_controller.js");

usersMethod = new UsersModifyMethod();

/* GET users listing. */

router.get('/', usersMethod.getIndexPage);

router.get("/personalSet", usersMethod.getpersonalSetPage);

router.get("/:name/profile", usersMethod.getProfile);

router.put("/update", usersMethod.putUpdate);

module.exports = router;
