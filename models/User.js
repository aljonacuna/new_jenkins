const Config = require("../config");
const config = new Config();
class User {
	constructor() {
		// config.session();
	}
	getUser(email) {
		return new Promise(function(resolve, reject) {
			config.database().query("SELECT * from users where email = ?",[email],function(err, result) {
				if(err) {
					reject(result);
				}
				else {
					resolve(true);
				}
			});
		});	
	}
	
	async createUser(params){
		return new Promise(function(resolve, reject) {
			config.database().query(`INSERT INTO users (first_name, email, password) 
			VALUES(?, ?, ?)`,[params['name'], params['email'], params['password']], 
			function(err, result) {
				if(err) {
					reject(false);
				}
				else {
					resolve(true);
				}
			})
		});
	}

}

module.exports = User;