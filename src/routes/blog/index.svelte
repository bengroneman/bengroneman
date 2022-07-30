<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/articles');

		if (response.ok) return { props: { articles: await response.json() } };
		return {
			status: response.status,
			error: new Error()
		};
	}
</script>

<script>
	import ArticleShowcase from '../../components/ArticleShowcase.svelte';
	export let articles;
</script>

{#if articles.length > 0}
	<ArticleShowcase {articles} />
{/if}

{#if articles.length === 0}
	<p>No articles found.</p>
{/if}
