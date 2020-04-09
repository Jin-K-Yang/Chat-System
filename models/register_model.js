const connection = require("./connection_db.js");

module.exports = function register(member_data){
	let result = {};
	return new Promise((resolve, reject)=>{
		connection.query("SELECT email FROM member_info WHERE email = ?", member_data.email, function(err, rows){
			if(err){
				//if database error
				console.log(err);
				reject("server issue!");
				return;
			}
			if(rows.length > 0){
				//if email is existed
				reject("email has been existed!");
			}
			else{
				//insert data into database
				connection.query("INSERT INTO member_info SET ?", member_data, function(err, rows){
					if(err){
						console.log(err);
						reject("server issue!");
						return;
					}
					else{
						resolve(member_data);
					}
				})
			}
		})
	})
}