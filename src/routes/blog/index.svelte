<script>
	import ArticleShowcase from '../../components/ArticleShowcase.svelte';
	import { blogArticles } from "../../stores/blog.js";
</script>

{#if $blogArticles.length > 0}
	<ArticleShowcase articles={$blogArticles} />
{/if}

{#if $blogArticles.length === 0}
	<p>No articles found.</p>
{/if}
