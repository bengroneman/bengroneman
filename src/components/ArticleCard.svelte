<script lang="js">
	export let article;
	const getArticleSlug = (title) => {
		return title.split(' ').map(w => w.toLowerCase()).join('-')
	}
	const getSimpleDate = (dateStr) => {
		const _date = new Date(dateStr)
		return `${_date.getFullYear()}-${_date.getMonth()}-${_date.getDate()}`
	}
</script>

<div class="mt-12">
	<div>
		<a href="/blog/article-{article.title}" class="inline-block">
			{#each article.categories as category}
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
			>
				{category}
			</span>
			{/each}
		</a>
	</div> <a href="/blog/article-{getArticleSlug(article.title)}" class="block mt-4">
			<p class="text-xl font-semibold text-gray-900">
				{article.title}
			</p>
		<p class="mt-3 text-base text-gray-500">{article.description}</p>
	</a>
	<div class="mt-6 flex items-center">
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">
				<a href="/"> {article.author} </a>
			</p>
			<div class="flex space-x-1 text-sm text-gray-500">
				<time datetime={getSimpleDate(article.createdAt)}> {getSimpleDate(article.createdAt)} </time>
				<span aria-hidden="true"> &middot; </span>
				<span> 6 min read </span>
			</div>
		</div>
	</div>
</div>
