const toRegister = require("../models/register_model");

//transform the date to the "yyyy-mm-dd hh:mm:ss" form
Date.prototype.yyyymmddhhmmss = function() {
	var yyyy = this.getFullYear();
	var MM = this.getMonth() + 1;	//	getMonth() is zero based
	var dd = this.getDate();
	var hh = this.getHours();
	var mm = this.getMinutes();
	var ss = this.getSeconds();

	return (yyyy + "-" + 
			(MM > 9 ? "" : "0") + MM + "-" + 
			(dd > 9 ? "" : "0") + dd + " " +
			(hh > 9 ? "" : "0") + hh + ":" +
			(mm > 9 ? "" : "0") + mm + ":" +
			(ss > 9 ? "" : "0") + ss);
};

module.exports = class Member{
	//get data from client
	postRegister(req, res, next){
		const member_data = {
			name : req.body.name,
			email : req.body.email,
			password : req.body.password,
			create_date : onTime()
		}

		toRegister(member_data).then(result=>{
			res.json({
				status : "register success!",
				result : result
			})
		},(err)=>{
			res.json({
				result : err
			})
		})
	}
}

function onTime(){
	var date = new Date();
	var date_string = date.yyyymmddhhmmss();
	return date_string;
}