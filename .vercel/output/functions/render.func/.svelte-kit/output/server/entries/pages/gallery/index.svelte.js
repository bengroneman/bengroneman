import { c as create_ssr_component, e as each, d as escape, b as add_attribute } from "../../../_app/immutable/chunks/index-5a62db6b.js";
async function load({ fetch }) {
  const response = await fetch("/api/gallery");
  if (response.ok)
    return { props: { images: await response.json() } };
  return {
    status: response.status,
    error: new Error()
  };
}
const Gallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `<ul class="${"grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"}">${images ? `${each(images, (image) => {
    return `<li class="${"relative"}"><div class="${"group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"}"><img src="${"./src/assets/" + escape(image, true)}"${add_attribute("alt", image, 0)} class="${"object-cover pointer-events-none group-hover:opacity-75"}"></div>
			</li>`;
  })}` : ``}</ul>`;
});
export {
  Gallery as default,
  load
};
