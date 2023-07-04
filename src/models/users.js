import dbpool from "../config/database.js";
const getModelAllUsers = () => {
	const SQLQuery = "SELECT * FROM users";

	return dbpool.execute(SQLQuery);
};

const createModelUser = (body) => {
	const SQLQuery = `INSERT INTO users(name,email,alamat) 
                     VALUES('${body.name}','${body.email}','${body.alamat}')`;
	return dbpool.execute(SQLQuery);
};

export { getModelAllUsers, createModelUser };
