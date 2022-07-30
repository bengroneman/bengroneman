<script>
	import { onMount } from 'svelte';
	import { getPayload } from '../../lib/utils.js';

	let images;
	let loading = true;

	onMount(async () => {
		const url = 'https://groneman.org/api/gallery?populate=*';
		images = await getPayload(url);
		console.log(images);
		loading = false;
	});
</script>

<ul class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
	{#if images}
		{#each images.attributes.Assets.data as image}
			<li class="relative">
				<div
					class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
				>
					<img
						src="https://groneman.org{image.attributes.formats.medium.url}"
						alt={image.attributes.alternativeText}
						class="object-cover pointer-events-none group-hover:opacity-75"
					/>
					<button type="button" class="absolute inset-0 focus:outline-none">
						<span class="sr-only">View details for {image.attributes.name}</span>
					</button>
				</div>
				<p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
					{image.attributes.name}
				</p>
			</li>
		{/each}
	{/if}
</ul>
