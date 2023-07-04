import dbpool from "../config/database.js";

const getAllUsers = () => {
	const SQLQuery = "SELECT * FROM users";

	return dbpool.execute(SQLQuery);
};

export { getAllUsers as modelUsers };
