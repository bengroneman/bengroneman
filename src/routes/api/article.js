import { getMatter } from './index.js';
import { getArticleSlug } from "../../lib/utils.js";

export async function GET({ params }) {
    console.log(params)
    return await getMatter(`./src/matter/blog/${params.slug}`);
}
