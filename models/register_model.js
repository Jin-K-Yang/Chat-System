const connection = require("./connection_db.js");

module.exports = function register(member_data){
	let result = {};
	return new Promise((resolve, reject)=>{
		Promise.all([check_email(member_data.email), check_name(member_data.name)]).then(function(){	//if email and name are new
			connection.query("INSERT INTO member_info SET ?", member_data, function(err, rows){			//insert data
				if(err){
					console.log(err);
					reject("server issue!");
					return;
				}
				else{
					resolve(member_data);														//success insert data
				}
			})
		}, function(reason){																	//if email or name has been existed
			reject(reason);																		//failed insert data
		})
	})
}

//check email if it has been existed
function check_email(email){
	return new Promise((resolve, reject)=>{
		connection.query("SELECT email FROM member_info WHERE email = ?", email, function(err, rows){
			if(err){
				//if database error
				console.log(err);
				reject("server issue!");
				return;
			}
			if(rows.length > 0){
				//if email has been existed
				reject("email has been existed!");
				return;
			}
			else{
				resolve();
				return;
			}
		})
	})
}

//check name if it has been existed
function check_name(name){
	return new Promise((resolve, reject)=>{
		connection.query("SELECT name FROM member_info WHERE name = ?", name, function(err, rows){
			if(err){
				//if database error
				console.log(err);
				reject("server issue!");
				return;
			}
			if(rows.length > 0){
				//if email has been existed
				reject("User name has been existed!");
				return;
			}
			else{
				resolve();
				return;
			}
		})
	})
}