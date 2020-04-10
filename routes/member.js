var express = require('express');
//var multer = require("multer");
var router = express.Router();
//var upload = multer();

const MemberModifyMethod = require("../controllers/modify_controller");

memberModifyMethod = new MemberModifyMethod();

router.post('/register', memberModifyMethod.postRegister);

module.exports = router;