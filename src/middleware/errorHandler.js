const notFound = (req, res) => {
	res.status(404).json('endpoint or method not found');
}

const httpError = (err, req, res, next) => {
	const { status, message } = err;
	res.status(status || 500).json(message);
}

export default {
	notFound,
	httpError
}
