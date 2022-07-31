import "reflect-metadata";
import app from './server';
import { AppDataSource } from "./database/connection";

async function main() {
	try {
		await AppDataSource.initialize();
		app.listen(4000, () => console.log('Server listening on port 4000'));
	} catch(e) {
		console.error(e);
	}
}

main();
