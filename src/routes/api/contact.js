import { getMatter } from './index.js';

export async function GET() {
	const contactFilename = './src/matter/pages/Contact.md';
	return { body: await getMatter(contactFilename) };
}
