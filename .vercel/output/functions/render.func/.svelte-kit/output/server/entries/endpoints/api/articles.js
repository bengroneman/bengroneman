import fs from "fs";
import { getMatter } from "./index.js";
import "gray-matter";
async function GET() {
  const articleFiles = fs.readdirSync("./src/matter/blog/");
  const articles = await Promise.all(
    articleFiles.map(async (filename) => {
      return await getMatter(`./src/matter/blog/${filename}`);
    })
  );
  return { body: articles };
}
export {
  GET
};
