const test = (req, res, next) => {
	try {
		return res.json('auth microservice');
	} catch(error) {
		return next(error);
	}
}

export default {
	test
};
