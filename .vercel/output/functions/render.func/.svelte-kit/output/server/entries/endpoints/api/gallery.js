import fs from "fs";
async function GET() {
  return { body: await getAssetFilenames() };
}
const getAssetFilenames = async () => {
  return fs.readdirSync("./src/assets/");
};
export {
  GET
};
