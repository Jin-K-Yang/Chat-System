var express = require('express');
var router = express.Router();

const UsersModifyMethod = require("../controllers/users_controller");

usersMethod = new UsersModifyMethod();

/* GET users listing. */
router.get('/', usersMethod.getIndexPage);

router.put("/update", usersMethod.putUpdate);

module.exports = router;
