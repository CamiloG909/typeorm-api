import { DataSource } from 'typeorm';
import { User } from '../entities/User';

const {DB_HOST,DB_USER, DB_PASS, DB_NAME, DB_SCHEMA} = process.env;
const DB_PORT = process.env.DB_PORT ? +process.env.DB_PORT : 5432;

export const AppDataSource = new DataSource({
	type: "postgres",
	host: DB_HOST,
	port: DB_PORT,
	username: DB_USER,
	password: DB_PASS,
	database: DB_NAME,
	schema: DB_SCHEMA,
	entities: [User],
	synchronize: true,
});
