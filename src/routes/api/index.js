import matter from 'gray-matter';

export async function GET() {
	const homeFilename = './src/matter/pages/Home.md';
	return { body: await getMatter(homeFilename) };
}

export async function getMatter(fn) {
	const opts = {
		excerpt: true,
		sections: true
	};
	const { data: frontmatter, content } = await matter.read(fn, opts);
	return { ...frontmatter, content };
}
