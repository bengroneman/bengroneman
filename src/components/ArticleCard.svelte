<script lang="js">
	export let article;
</script>

<div class="mt-12">
	<div>
		<a href="/blog/article-{article.title}" class="inline-block">
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
			>
				{article.title}
			</span>
		</a>
	</div>
	<a href="/blog/article-{article.title}" class="block mt-4">
		{#each article.categories as category}
			<p class="text-xl font-semibold text-gray-900">
				{category}
			</p>
		{/each}
		<p class="mt-3 text-base text-gray-500">{article.description}</p>
	</a>
	<div class="mt-6 flex items-center">
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">
				<a href="/"> {article.author} </a>
			</p>
			<div class="flex space-x-1 text-sm text-gray-500">
				<time datetime="2020-03-16"> {article.createdAt} </time>
				<span aria-hidden="true"> &middot; </span>
				<span> 6 min read </span>
			</div>
		</div>
	</div>
</div>
