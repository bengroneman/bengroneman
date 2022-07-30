import { c as create_ssr_component, d as escape } from "../../../_app/immutable/chunks/index-5a62db6b.js";
import { parse } from "marked";
async function load({ fetch }) {
  const response = await fetch("/api/contact");
  if (response.ok)
    return {
      props: { contactContent: await response.json() }
    };
  return {
    status: response.status,
    error: new Error()
  };
}
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contactContent } = $$props;
  if ($$props.contactContent === void 0 && $$bindings.contactContent && contactContent !== void 0)
    $$bindings.contactContent(contactContent);
  return `<div class="${"relative bg-white"}"><div class="${"absolute inset-0"}"><div class="${"absolute inset-y-0 left-0 w-1/2 bg-gray-50"}"></div></div>
	<div class="${"relative max-w-7xl mx-auto lg:grid lg:grid-cols-5"}"><div class="${"bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"}"><div class="${"max-w-lg mx-auto"}"><h2 class="${"text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"}">${escape(contactContent.title)}</h2>
				<p class="${"mt-3 text-lg leading-6 text-gray-500"}"><!-- HTML_TAG_START -->${parse(contactContent.content)}<!-- HTML_TAG_END --></p>
				<dl class="${"mt-8 text-base text-gray-500"}"><div><dt class="${"sr-only"}">Regional Location</dt>
						<dd><p>${escape(contactContent.location)}</p></dd>
					</div><div class="${"mt-3"}"><dt class="${"sr-only"}">Email</dt>
						<dd class="${"flex"}">
							<svg class="${"flex-shrink-0 h-6 w-6 text-gray-400"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}"></path></svg>
							<span class="${"ml-3"}">${escape(contactContent.emailAddress)}</span></dd></div></dl></div></div>
		<div class="${"bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"}"><div class="${"max-w-lg mx-auto lg:max-w-none"}"><form action="${"#"}" method="${"POST"}" class="${"grid grid-cols-1 gap-y-6"}"><div><label for="${"full-name"}" class="${"sr-only"}">Full name</label>
						<input type="${"text"}" name="${"full-name"}" id="${"full-name"}" autocomplete="${"name"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}" placeholder="${"Full name"}"></div>
					<div><label for="${"email"}" class="${"sr-only"}">Email</label>
						<input id="${"email"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}" placeholder="${"Email"}"></div>
					<div><label for="${"phone"}" class="${"sr-only"}">Phone</label>
						<input type="${"text"}" name="${"phone"}" id="${"phone"}" autocomplete="${"tel"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"}" placeholder="${"Phone"}"></div>
					<div><label for="${"message"}" class="${"sr-only"}">Message</label>
						<textarea id="${"message"}" name="${"message"}" rows="${"4"}" class="${"block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"}" placeholder="${"Message"}"></textarea></div>
					<div><button type="${"submit"}" class="${"inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}">Submit</button></div></form></div></div></div></div>`;
});
export {
  Contact as default,
  load
};
