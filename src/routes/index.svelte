<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api');

		if (response.ok) return { props: { content: await response.json() } };
		return {
			status: response.status,
			error: new Error()
		};
	}
</script>

<script lang="js">
	import { onMount } from 'svelte';
	import { parse } from 'marked';
	import Hero from '../components/Hero.svelte';
	import BGImage from '../assets/headshot_2019.jpg';
	export let content;
</script>

<svelte:head>
	<title>{content.title}</title>
</svelte:head>

{#if content}
	<Hero header={content.heroHeader} subHeader={content.heroSubHeader} content={content.heroContent}>
		<img class="flex mx-auto" src={BGImage} alt={content.heroHeader} />
	</Hero>
	{@html parse(content.content)}
{/if}
