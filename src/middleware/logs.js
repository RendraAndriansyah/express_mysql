const logRequestPrimary = (req, res, next) => {
	console.log("terjadi request melalui log primary ", req.path);
	next();
};

const logRequestSecondary = (req, res, next) => {
	console.log("terjadi request melalui log secondary");
	next();
};

export { logRequestPrimary, logRequestSecondary };
