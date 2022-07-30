import matter from "gray-matter";

const getHomePageContent = async () => {
    const { data: frontmatter, content } = await matter.read('./src/matter/pages/Home.md');
    return {...frontmatter, content};
}

export async function GET() {
    return {body: await getHomePageContent()}
}
