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
  default: () => Client_portal
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5a62db6b = require("../../../_app/immutable/chunks/index-5a62db6b.js");
const Client_portal = (0, import_index_5a62db6b.c)(($$result, $$props, $$bindings, slots) => {
  return `
<div class="${"bg-gray-50"}"><div class="${"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"}"><h2 class="${"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"}"><span class="${"block"}">Looking for documentation?</span>
			<span class="${"block text-indigo-600"}">Login to the client portal here.</span></h2>
		<div class="${"mt-8 flex lg:mt-0 lg:flex-shrink-0"}"><div class="${"inline-flex rounded-md shadow"}"><a href="${"http://164.90.152.35"}" class="${"inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"}">Login
				</a></div></div></div></div>`;
});
