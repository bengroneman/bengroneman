import { c as create_ssr_component, d as escape, e as each, v as validate_component } from "../../../_app/immutable/chunks/index-5a62db6b.js";
const ArticleCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `<div class="${"mt-12"}"><div><a href="${"/blog/article-" + escape(article.title, true)}" class="${"inline-block"}"><span class="${"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"}">${escape(article.title)}</span></a></div>
	<a href="${"/blog/article-" + escape(article.title, true)}" class="${"block mt-4"}">${each(article.categories, (category) => {
    return `<p class="${"text-xl font-semibold text-gray-900"}">${escape(category)}
			</p>`;
  })}
		<p class="${"mt-3 text-base text-gray-500"}">${escape(article.description)}</p></a>
	<div class="${"mt-6 flex items-center"}"><div class="${"ml-3"}"><p class="${"text-sm font-medium text-gray-900"}"><a href="${"/"}">${escape(article.author)}</a></p>
			<div class="${"flex space-x-1 text-sm text-gray-500"}"><time datetime="${"2020-03-16"}">${escape(article.createdAt)}</time>
				<span aria-hidden="${"true"}">\xB7 </span>
				<span>6 min read </span></div></div></div></div>`;
});
const ArticleShowcase = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { articles = [] } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  return `<div><div class="${"bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"}"><div class="${"relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"}"><div><h2 class="${"text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"}">Recent Articles
				</h2></div>
			<div class="${"grid lg:grid-cols-3 sm:grid-cols-1"}">${each(articles, (article) => {
    return `${validate_component(ArticleCard, "ArticleCard").$$render($$result, { article }, {}, {})}`;
  })}</div></div></div></div>`;
});
async function load({ fetch }) {
  const response = await fetch("/api/articles");
  if (response.ok)
    return {
      props: { articles: await response.json() }
    };
  return {
    status: response.status,
    error: new Error()
  };
}
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { articles } = $$props;
  if ($$props.articles === void 0 && $$bindings.articles && articles !== void 0)
    $$bindings.articles(articles);
  return `${articles.length > 0 ? `${validate_component(ArticleShowcase, "ArticleShowcase").$$render($$result, { articles }, {}, {})}` : ``}

${articles.length === 0 ? `<p>No articles found.</p>` : ``}`;
});
export {
  Blog as default,
  load
};
