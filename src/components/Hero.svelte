<script>
	export let header;
	export let subHeader;
	export let content;
</script>

<div class="relative my-12">
	<div class="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
		<div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
			<h1>
				<span class="block xl:inline">{header}</span>
			</h1>
			<h3>
				{subHeader}
			</h3>
			<p>
				{content}
			</p>
			<div class="mt-10 sm:flex sm:justify-center lg:justify-start">
				<div class="rounded-md shadow">
					<a href="/blog" class="primary-btn-lg"> Read the blog </a>
				</div>
			</div>
		</div>
	</div>
	<div
		class="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full"
	>
		<slot />
	</div>
</div>
