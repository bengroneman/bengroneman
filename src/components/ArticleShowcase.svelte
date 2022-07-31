<script>
	import ArticleCard from '../components/ArticleCard.svelte';

	export let articles = [];
</script>

<div>
	<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
		<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
			<div>
				<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
					Recent Articles
				</h2>
			</div>
			<div class="grid lg:grid-cols-3 sm:grid-cols-1">
				{#each articles as article}
					{#if article.published}
					    <ArticleCard {article} />
				    {/if}
				{/each}
			</div>
		</div>
	</div>
</div>
