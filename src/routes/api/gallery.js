import fs from 'fs';

export async function GET() {
	return { body: await getAssetFilenames() };
}

const getAssetFilenames = async () => {
	return fs.readdirSync('./src/assets/');
};
