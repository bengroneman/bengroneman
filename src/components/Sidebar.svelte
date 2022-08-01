<script>
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	let navigation;
	$: navigation = [
		{
			url: '/',
			name: 'Home',
			isActive: true
		},
		{
			url: '/blog',
			name: 'Blog',
			isActive: false
		},
		{
			url: '/client-portal',
			name: 'Client Portal',
			isActive: false
		},
		{
			url: '/gallery',
			name: 'Gallery',
			isActive: false
		},
		{
			url: '/contact',
			name: 'Contact',
			isActive: false
		}
	];
	let navToggled = false;

	const toggleNav = () => {
		navToggled = !navToggled;
	};
</script>

<div class="h-full">
	<div class="md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
		<!-- Sidebar component, swap this element with another sidebar if you like -->
		<div class="flex-1 flex flex-col min-h-0 bg-sky-700">
			<div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
				<div
					class="flex items-center flex-shrink-0 px-4 leading-3 tracking-widest font-bold text-2xl"
				>
					<span class="text-white decoration-amber-600 decoration-2 underline decoration-wavy mb-2"
						>Blue</span
					> <span class="text-white pl-4 underline decoration-4 decoration-teal-600 mt-2">G</span>
				</div>
				<nav class="mt-5 flex-1 px-2 space-y-1">
					<!-- Current: "bg-sky-800 text-white", Default: "text-white hover:bg-sky-600 hover:bg-opacity-75" -->
					{#each navigation as nav}
						<a
							href={nav.url}
							class="{$page.url.pathname === nav.url
								? 'active-nav-item'
								: 'inactive-nav-item'} nav-item"
						>
							{#if $page.url.pathname === nav.url}
								<!-- Heroicon name: full/cube -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
									/>
								</svg>
							{:else}
								<!-- Heroicon name: half/cube -->
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
									/>
								</svg>
							{/if}
							<span class="ml-2">
								{nav.name}
							</span>
						</a>
					{/each}
				</nav>
			</div>
			<div
				onclick={toggleNav}
				class="flex-shrink-0 flex border-t border-sky-800 p-4 ml-auto cursor-pointer"
			>
				{#if navToggled}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
						/>
					</svg>
				{/if}
				{#if !navToggled}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
					</svg>
				{/if}
			</div>
		</div>
	</div>
	<div class="md:pl-64 flex flex-col flex-1">
		<main class="flex-1">
			<div class="py-6">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h1 class="text-2xl font-semibold text-gray-900">
						{$page.url.pathname.split('/').pop()}
					</h1>
				</div>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<slot />
				</div>
			</div>
		</main>
	</div>
</div>
