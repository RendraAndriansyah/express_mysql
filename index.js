import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { logRequestPrimary } from "./src/middleware/logs.js";
import usersRouter from "./src/routes/users.js";
const app = express();
const PORT = process.env.PORT;

app.use(logRequestPrimary);
app.use(express.json());

app.use("/users", usersRouter);

app.listen(PORT, () => {
	console.log(`Server running ${PORT}`);
});
