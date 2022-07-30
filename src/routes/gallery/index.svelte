<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('/api/gallery');
		if (response.ok) return { props: { images: await response.json() } };
		return {
			status: response.status,
			error: new Error()
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	export let images;
</script>

<ul class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
	{#if images}
		{#each images as image}
			<li class="relative">
				<div
					class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
				>
					<img
						src="./src/assets/{image}"
						alt={image}
						class="object-cover pointer-events-none group-hover:opacity-75"
					/>
				</div>
			</li>
		{/each}
	{/if}
</ul>
