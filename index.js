import dotenv from "dotenv";
import express from "express";
import { logRequestPrimary } from "./src/middleware/logs.js";
import usersRouter from "./src/routes/users.js";
import { upload } from "./src/middleware/multer.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(logRequestPrimary);
app.use(express.json());
app.use("/img", express.static("public/img"));

app.use("/users", usersRouter);
app.post("/upload", upload.single("photo"), (req, res) => {
	res.json({
		message: "Upload berhasil",
	});
});

app.listen(PORT, () => {
	console.log(`Server running ${PORT}`);
});
