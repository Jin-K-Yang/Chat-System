const check = require("../service/member_check.js");
const verify = require("../models/verification.js");

module.exports = class User{
	getIndexPage(req, res, next){
		res.render('personalpage', { 
  			title: 'ETestejs',
  			name: req.query.username,
  			token: req.query.token,
  		});
	}

	postUpdate(req, res, next){
		const token = req.headers['token'];
		//check token
		if(check.checkNULL(token) === true){
			res.json({
				status : 0,
				err : "no token!"
			});
		}
		else if (check.checkNULL(token) === false){

		}
	}
}
