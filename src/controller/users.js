import {
	getModelAllUsers,
	createModelUser,
	updateModelUser,
	deleteModelUser,
} from "../models/users.js";

const getAllUsers = async (req, res) => {
	try {
		const [data] = await getModelAllUsers();
		res.json({
			message: "GET users succes",
			data: data,
		});
	} catch (err) {
		res.status(500).json({
			message: "Server error",
			serverMessage: err.message,
		});
	}
};

const createNewUsers = async (req, res) => {
	const { body } = req;

	if (!body.name || !body.email || !body.alamat) {
		return res.status(400).json({
			message: `field cannot blank`,
		});
	}
	try {
		await createModelUser(body);
		res.status(201).json({
			message: "Create new users Success ",
			data: body,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed Create user ",
			serverMessage: error.message,
		});
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	try {
		await updateModelUser(body, id);
		res.json({
			message: "UPDATE user success",
			data: {
				id,
				...body,
			},
		});
	} catch (error) {
		res.status(404).json({
			message: "Failed update data",
			serverMessage: error,
		});
	}
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	try {
		await deleteModelUser(id);
		res.json({
			message: "DELETE user success",
			data: {
				id: id,
				...req.body,
			},
		});
	} catch (error) {
		res.status(404).json({
			message: "Delete user failed",
			serverMessage: error,
		});
	}
};

export { getAllUsers, createNewUsers, updateUser, deleteUser };
