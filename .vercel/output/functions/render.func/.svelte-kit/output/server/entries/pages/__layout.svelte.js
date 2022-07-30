import { g as getContext, c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape, v as validate_component } from "../../_app/immutable/chunks/index-5a62db6b.js";
const app = "";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let navigation;
  navigation = [
    { url: "/", name: "Home", isActive: true },
    {
      url: "/blog",
      name: "Blog",
      isActive: false
    },
    {
      url: "/client-portal",
      name: "Client Portal",
      isActive: false
    },
    {
      url: "/gallery",
      name: "Gallery",
      isActive: false
    },
    {
      url: "/contact",
      name: "Contact",
      isActive: false
    }
  ];
  $$unsubscribe_page();
  return `<div>
	<div class="${"relative z-40 md:hidden"}" role="${"dialog"}" aria-modal="${"true"}"><div class="${"fixed inset-0 bg-gray-600 bg-opacity-75"}"></div>

		<div class="${"fixed inset-0 flex z-40"}"><div class="${"relative flex-1 flex flex-col max-w-xs w-full bg-sky-700"}"><div class="${"absolute top-0 right-0 -mr-12 pt-2"}"><button type="${"button"}" class="${"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"}"><span class="${"sr-only"}">Close sidebar</span>
						
						<svg class="${"h-6 w-6 text-white"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M6 18L18 6M6 6l12 12"}"></path></svg></button></div>

				<div class="${"flex-1 h-0 pt-5 pb-4 overflow-y-auto"}"><div class="${"flex-shrink-0 flex items-center px-4"}"><img class="${"h-8 w-auto"}" src="${"https://tailwindui.com/img/logos/workflow-logo-sky-300-mark-white-text.svg"}" alt="${"Workflow"}"></div>
					<nav class="${"mt-5 px-2 space-y-1"}">
						${each(navigation, (nav) => {
    return `<a${add_attribute("href", nav.url, 0)} class="${escape(
      $page.url.pathname !== nav.url ? "bg-sky-800 text-white" : "text-white hover:bg-sky-600 hover:bg-opacity-75",
      true
    ) + " group flex items-center px-4 py-2 text-base font-medium rounded-md"}">${$page.url.pathname === nav.url ? `
									<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}"></path></svg>` : `
									<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}"></path></svg>`}
								<span class="${"ml-2"}">${escape(nav.name)}</span>
							</a>`;
  })}</nav></div></div>

			<div class="${"flex-shrink-0 w-14"}" aria-hidden="${"true"}"></div></div></div>

	
	<div class="${"hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0"}">
		<div class="${"flex-1 flex flex-col min-h-0 bg-sky-700"}"><div class="${"flex-1 flex flex-col pt-5 pb-4 overflow-y-auto"}"><div class="${"flex items-center flex-shrink-0 px-4 leading-3 tracking-widest font-bold text-2xl"}"><span class="${"text-white decoration-amber-600 decoration-2 underline decoration-wavy mb-2"}">Blue</span> <span class="${"text-white pl-4 underline decoration-4 decoration-teal-600 mt-2"}">G</span></div>
				<nav class="${"mt-5 flex-1 px-2 space-y-1"}">
					${each(navigation, (nav) => {
    return `<a${add_attribute("href", nav.url, 0)} class="${escape(
      $page.url.pathname === nav.url ? "bg-sky-800 text-white" : "text-white hover:bg-sky-600 hover:bg-opacity-75",
      true
    ) + " group flex items-center px-4 py-2 text-base font-medium rounded-md"}">${$page.url.pathname === nav.url ? `
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"}"></path></svg>` : `
								<svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"}"></path></svg>`}
							<span class="${"ml-2"}">${escape(nav.name)}</span>
						</a>`;
  })}</nav></div>
			<div class="${"flex-shrink-0 flex border-t border-sky-800 p-4"}"></div></div></div>
	<div class="${"md:pl-64 flex flex-col flex-1"}"><div class="${"sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100"}"><button type="${"button"}" class="${"-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"}"><span class="${"sr-only"}">Open sidebar</span>
				
				<svg class="${"h-6 w-6"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"2"}" stroke="${"currentColor"}" aria-hidden="${"true"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M4 6h16M4 12h16M4 18h16"}"></path></svg></button></div>
		<main class="${"flex-1"}"><div class="${"py-6"}"><div class="${"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"}"><h1 class="${"text-2xl font-semibold text-gray-900"}">${escape($page.url.pathname.split("/").pop())}</h1></div>
				<div class="${"max-w-7xl mx-auto px-4 sm:px-6 md:px-8"}">${slots.default ? slots.default({}) : ``}</div></div></main></div></div>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  _layout as default
};