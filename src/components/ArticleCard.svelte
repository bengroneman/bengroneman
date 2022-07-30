<script lang="js">
	export let article;
</script>
{#if article.attributes}
<div class="mt-12">
	<div>
		<a href="/blog/article-{article.id}" class="inline-block">
			<span
				class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
			>
				{article.attributes.title}
			</span>
		</a>
	</div>
	<a href="/blog/article-{article.id}" class="block mt-4">
    {#if article.attributes.category}
		<p class="text-xl font-semibold text-gray-900">

			{article.attributes.category.data.attributes.name}
		</p>
    {/if}
		<p class="mt-3 text-base text-gray-500">{article.attributes.description}</p>
	</a>
	<div class="mt-6 flex items-center">
		<div class="flex-shrink-0">
        {#if article.attributes.author}
			<span class="sr-only">{article.attributes.author.data.attributes.name}</span>
        {/if}
			<!--			<img-->
			<!--				class="h-10 w-10 rounded-full"-->
			<!--				src="https://groneman.org{article.attributes.image.data.attributes.url}"-->
			<!--				alt={article.attributes.image.data.attributes.alternativeText}-->
			<!--			/>-->
		</div>
		<div class="ml-3">
			<p class="text-sm font-medium text-gray-900">
            {#if article.attributes.author}
				<a href="/"> {article.attributes.author.data.attributes.name} </a>
            {/if}
			</p>
			<div class="flex space-x-1 text-sm text-gray-500">
				<time datetime="2020-03-16"> {article.attributes.createdAt} </time>
				<span aria-hidden="true"> &middot; </span>
				<span> 6 min read </span>
			</div>
		</div>
	</div>
</div>
{/if}
