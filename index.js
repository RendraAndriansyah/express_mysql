import express from "express";
import { logRequestPrimary } from "./src/middleware/logs.js";
import usersRouter from "./src/routes/users.js";
import mysql2 from "mysql2";
const app = express();

app.use(logRequestPrimary);
app.use(express.json());

const dbpool = mysql2.createPool({
	host: "localhost",
	user: "root",
	password: "Rendra321!",
	database: "express_mysql",
});

app.use("/", (req, res) => {
	dbpool.execute("SELECT * FROM users", (err, rows) => {
		if (err) {
			res.json({
				message: "Connection failed",
			});
		}
		res.json({
			message: "connection success",
			data: rows,
		});
	});
});

app.use("/users", usersRouter);

app.listen(3131, () => {
	console.log("Server running on port 3131");
});
