var express = require('express');
var router = express.Router();

const UsersModifyMethod = require("../controllers/users_controller");

usersMethod = new UsersModifyMethod();

/* GET users listing. */
router.get('/', usersMethod.getIndexPage);

module.exports = router;
