import "reflect-metadata";
require('dotenv').config();
import app from './server';
import { AppDataSource } from "./database/connection";

const PORT : number = process.env.PORT ? +process.env.PORT : 4000;

async function main() {
	try {
		await AppDataSource.initialize();
		app.listen(PORT, '0.0.0.0', () => console.log('Server listening on port', PORT));
	} catch(e) {
		console.error(e);
	}
}

main();
