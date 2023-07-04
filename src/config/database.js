import mysql2 from "mysql2";

const dbpool = mysql2.createPool({
	host: "localhost",
	user: "root",
	password: "Rendra321!",
	database: "express_mysql",
});

export default dbpool.promise();
