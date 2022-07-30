import { getMatter } from "./index.js";
import "gray-matter";
async function GET() {
  const contactFilename = "./src/matter/pages/Contact.md";
  return { body: await getMatter(contactFilename) };
}
export {
  GET
};
