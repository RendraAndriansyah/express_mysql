const getAllUsers = (req, res) => {
	const dummyData = {
		id: "1",
		name: "Rendra",
		email: "rendra3211@gmail.com",
		alamat: "Jakarta",
	};
	res.json({
		message: "GET users succes",
		data: dummyData,
	});
};

const createNewUsers = (req, res) => {
	// console.log(req.body);
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
