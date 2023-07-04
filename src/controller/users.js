import { getModelAllUsers, createModelUser, updateModelUser } from "../models/users.js";

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
	try {
		await createModelUser(body);
		res.json({
			message: "Create new users Success ",
			data: body,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed Create user ",
			serverMessage: error,
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

const deleteUser = (req, res) => {
	const { id } = req.params;
	res.json({
		message: "DELETE user success",
		data: {
			id: id,
			name: "Andrianysah",
			email: "rendrabootcamp@gmail.com",
			alamat: "jakarta",
		},
	});
};

export { getAllUsers, createNewUsers, updateUser, deleteUser };
