import express from 'express';
import { json, urlencoded } from 'body-parser';

const startServer = () => {
	const app = express();

	app.use(urlencoded({ extended: false }));
	app.use(json());

	app.use('/auth', (req, res) => {
		res.send('auth microservice');
	});

	const port = process.env.PORT || 3001;

	app.listen(port, () => console.log(`Express server listening on port ${port}`));
}

export default startServer;
