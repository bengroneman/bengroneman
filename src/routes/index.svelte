<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api');

		if (response.ok) return { props: { content: await response.json()}};
		return {
			status: response.status,
			error: new Error()
		};
	};
</script>
<script lang="js">
	import { onMount } from 'svelte';
	import { parse } from "marked";
	export let content;
</script>

{#if content}
	{content.title}
	{content.description}
	{@html parse(content.content)}
{/if}
