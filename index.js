import express from "express";
import { logRequestPrimary } from "./src/middleware/logs.js";
import usersRouter from "./src/routes/users.js";
import { getAllUsers } from "./src/controller/users.js";
const app = express();

app.use(logRequestPrimary);
app.use(express.json());

app.use("/users", usersRouter);

app.listen(3131, () => {
	console.log("Server running on port 3131");
});
