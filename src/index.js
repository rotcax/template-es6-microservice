import { config } from 'dotenv';
import { startServer, startDatabase } from './settings';

config();
startDatabase();
startServer();
