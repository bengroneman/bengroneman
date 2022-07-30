<script>
	import { onMount } from 'svelte';
	import ArticleCard from '../components/ArticleCard.svelte';
	import { getPayload } from '../lib/utils.js';

	export let articles = [];
</script>

{#if articles}
	<div>
		<div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<div>
					<h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
						Recent publications
					</h2>
				</div>
				<div class="grid lg:grid-cols-3 sm:grid-cols-1">
                    {#each articles as article}
                        <ArticleCard {article} />
                    {/each}
				</div>
			</div>
		</div>
	</div>
{/if}
