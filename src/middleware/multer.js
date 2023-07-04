import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/img");
	},
	filename: (req, file, cb) => {
		const timestapm = new Date().getTime();
		const filename = file.originalname;
		// const extension = path.extname(file.originalname);

		cb(null, `${timestapm}-${filename}`);
	},
});

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 3 * 1000 * 1000, // limit size file 3MB
	},
});

export { upload };
