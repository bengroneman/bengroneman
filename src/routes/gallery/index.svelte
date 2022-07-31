<script>
	import image1 from '../../assets/Flow_Step.png';
	import image2 from '../../assets/Flow_Step_6.png';
	import image3 from '../../assets/Flow_Step_10.png';
	import image4 from '../../assets/Flow_Step_11.png';
	import image5 from '../../assets/Flow_step_8.png';
	const images = [image1, image2, image3, image4, image5];
</script>

<ul class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
	{#if images}
		{#each images as image}
			<li class="relative">
				<div
					class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"
				>
					<img
						src={image}
						alt={image}
						class="object-cover pointer-events-none group-hover:opacity-75"
					/>
				</div>
			</li>
		{/each}
	{/if}
</ul>
