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
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5a62db6b = require("../../_app/immutable/chunks/index-5a62db6b.js");
var import_marked = require("marked");
const Hero = (0, import_index_5a62db6b.c)(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { subHeader } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.subHeader === void 0 && $$bindings.subHeader && subHeader !== void 0)
    $$bindings.subHeader(subHeader);
  return `<div class="${"relative my-12"}"><div class="${"mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"}"><div class="${"px-4 lg:w-1/2 sm:px-8 xl:pr-16"}"><h1 class="${"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"}"><span class="${"block xl:inline"}">${(0, import_index_5a62db6b.d)(header)}</span></h1>
			<p class="${"mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"}">${(0, import_index_5a62db6b.d)(subHeader)}</p>
			<div class="${"mt-10 sm:flex sm:justify-center lg:justify-start"}"><div class="${"rounded-md shadow"}"><a href="${"/blog"}" class="${"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"}">Learn More
					</a></div></div></div></div>
	<div class="${"relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
const BGImage = "/_app/immutable/assets/headshot_2019-da6ae085.jpg";
async function load({ fetch }) {
  const response = await fetch("/api");
  if (response.ok)
    return {
      props: { content: await response.json() }
    };
  return {
    status: response.status,
    error: new Error()
  };
}
const Routes = (0, import_index_5a62db6b.c)(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${content ? `${(0, import_index_5a62db6b.v)(Hero, "Hero").$$render(
    $$result,
    {
      header: content.heroHeader,
      subHeader: content.heroSubHeader
    },
    {},
    {
      default: () => {
        return `<img${(0, import_index_5a62db6b.b)("src", BGImage, 0)}${(0, import_index_5a62db6b.b)("alt", content.heroHeader, 0)}>`;
      }
    }
  )}
	${(0, import_index_5a62db6b.d)(content.title)}
	${(0, import_index_5a62db6b.d)(content.description)}
	<!-- HTML_TAG_START -->${(0, import_marked.parse)(content.content)}<!-- HTML_TAG_END -->` : ``}`;
});
