import createError from 'http-errors';

const test = (req, res, next) => {
	try {
		return res.json('es6 microservice');
	} catch(error) {
		return next(createError(500, error.message));
	}
}

export default {
	test
};
