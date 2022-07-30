import { c as create_ssr_component, d as escape, v as validate_component, b as add_attribute } from "../../_app/immutable/chunks/index-5a62db6b.js";
import { parse } from "marked";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { header } = $$props;
  let { subHeader } = $$props;
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.subHeader === void 0 && $$bindings.subHeader && subHeader !== void 0)
    $$bindings.subHeader(subHeader);
  return `<div class="${"relative my-12"}"><div class="${"mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left"}"><div class="${"px-4 lg:w-1/2 sm:px-8 xl:pr-16"}"><h1 class="${"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"}"><span class="${"block xl:inline"}">${escape(header)}</span></h1>
			<p class="${"mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"}">${escape(subHeader)}</p>
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
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  return `${content ? `${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      header: content.heroHeader,
      subHeader: content.heroSubHeader
    },
    {},
    {
      default: () => {
        return `<img${add_attribute("src", BGImage, 0)}${add_attribute("alt", content.heroHeader, 0)}>`;
      }
    }
  )}
	${escape(content.title)}
	${escape(content.description)}
	<!-- HTML_TAG_START -->${parse(content.content)}<!-- HTML_TAG_END -->` : ``}`;
});
export {
  Routes as default,
  load
};
