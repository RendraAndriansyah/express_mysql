import { modelUsers } from "../models/users.js";

const getAllUsers = async (req, res) => {
	try {
		const [data] = await modelUsers();
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

const createNewUsers = (req, res) => {
	res.json({
		message: "Create new users Success ",
		data: req.body,
	});
};

const updateUser = (req, res) => {
	const { id } = req.params;
	console.log(`id user ${id}`);
	res.json({
		message: "UPDATE user success",
		data: req.body,
	});
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
