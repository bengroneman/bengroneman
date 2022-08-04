import fs from 'fs';
import { getMatter } from './index.js';

export async function GET() {
	const articleFiles = fs.readdirSync('./src/matter/blog/');
	const articles = await Promise.all(
		articleFiles.map(async (filename) => {
			let _matter = await getMatter(`./src/matter/blog/${filename}`);
			_matter.filename = filename;
			return _matter
		})
	);
	return { body: articles };
}
