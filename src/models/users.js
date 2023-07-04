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

const updateModelUser = (body, idUser) => {
	const query = `UPDATE users 
                  SET name='${body.name}', email='${body.email}', alamat='${body.alamat}'
                  WHERE id =${idUser}`;
	return dbpool.execute(query);
};

const deleteModelUser = (id) => {
	const query = `DELETE FROM users 
                  WHERE id = ${id}`;
	return dbpool.execute(query);
};

export { getModelAllUsers, createModelUser, updateModelUser, deleteModelUser };
