import express from "express";
import {
	getAllUsers,
	createNewUsers,
	updateUser,
	deleteUser,
} from "../controller/users.js";
const usersRouter = express.Router();

// CREATE - POST
usersRouter.post("/", createNewUsers);

// READ - GET
usersRouter.get("/", getAllUsers);

// UPDATE - PATCH
usersRouter.patch(`/:id`, updateUser);

// DELETE - DELETE
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
// export default router;
