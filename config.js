class Config {
	constructor() {
		this.Mysql = require('mysql');
	}
	database() {		
		var connection = this.Mysql.createConnection({
		    "host": "localhost",
		    "user": "root",
		    "password": "",
		    "database": "express",
		    "port": 3308
		});
		connection.connect(function(err) {
		    if (err) throw err;
		});
		return connection;
	}

	// session() {	
	// }
}
module.exports = Config;
