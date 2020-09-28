import { connect, connection } from 'mongoose';

const startDatabase = () => {
	const { DB_URL, DB_NAME } = process.env;

	connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    dbName: DB_NAME
  });

	const db = connection;

	db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('MongoDB database connection established successfully');
    console.log(`DB ${db.name} in ${db.host}:${db.port}`);
  });
}

export default startDatabase;
