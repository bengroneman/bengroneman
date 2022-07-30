var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Gallery,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5a62db6b = require("../../../_app/immutable/chunks/index-5a62db6b.js");
async function load({ fetch }) {
  const response = await fetch("/api/gallery");
  if (response.ok)
    return { props: { images: await response.json() } };
  return {
    status: response.status,
    error: new Error()
  };
}
const Gallery = (0, import_index_5a62db6b.c)(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `<ul class="${"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"}">${images ? `${(0, import_index_5a62db6b.e)(images, (image) => {
    return `<li class="${"relative"}"><div class="${"group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"}"><img src="${"./src/assets/" + (0, import_index_5a62db6b.d)(image, true)}"${(0, import_index_5a62db6b.b)("alt", image, 0)} class="${"object-cover pointer-events-none group-hover:opacity-75"}"></div>
			</li>`;
  })}` : ``}</ul>`;
});
