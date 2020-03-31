const connection = require("./connection_db.js");

module.exports = function register(member_data){
	let result = {};
	return new Promise((resolve, reject)=>{
		connection.query("INSERT INTO member_info SET ?", member_data, function(err, rows){
			if(err){
				console.log(err);
				result.status = "register failed!";
				result.err = "server issue!";
				reject(result);
				return;
			}
			result.registerMember = member_data;
			resolve(result);
		})
	})
}