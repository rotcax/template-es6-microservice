import express from 'express';
import routes from '../routes';
import { json, urlencoded } from 'body-parser';
import { errorHandler } from '../middleware';

const startServer = () => {
	const { notFound, httpError } = errorHandler;
	const app = express();

	app.use(urlencoded({ extended: false }));
	app.use(json());

	app.use('/auth', routes);

	app.use(notFound);
	app.use(httpError);

	const { PORT, HOST } = process.env;
	const port = PORT || 3001;
	const host = HOST || '127.0.0.1';

	app.listen(port, host, () => console.log(`Express server listening on port ${port}`));
}

export default startServer;
