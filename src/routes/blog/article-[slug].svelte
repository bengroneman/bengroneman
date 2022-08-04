<script context="module">
	export async function load({ params }) {
		return { props: { articleSlug: params.slug } };
	}
</script>

<script>
	import * as svelte from 'svelte';
	import { parse } from 'marked';
	import { blogArticles } from "../../stores/blog.js";
	import { getArticleFilename } from '../../lib/utils.js';
	export let articleSlug;
	let loading = false;

	$: selectedArticle = $blogArticles.filter(article => article.filename === getArticleFilename(articleSlug))
</script>

{#if selectedArticle}
<div class="bg-white overflow-hidden">
	<div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
		<div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
		<div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
			<div>
				<h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
					{selectedArticle.title}
				</h2>
			</div>
		</div>
		<div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
			<div class="relative lg:row-start-1 lg:col-start-2">
				<svg
					class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
					width="404"
					height="384"
					fill="none"
					viewBox="0 0 404 384"
					aria-hidden="true"
				>
					<defs>
						<pattern
							id="de316486-4a29-4312-bdfc-fbce2132a2c1"
							x="0"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
						</pattern>
					</defs>
					<rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
				</svg>
			</div>
			<div class="mt-8 lg:mt-0">
				<div class="text-base max-w-prose mx-auto lg:max-w-none">
					<!--{@html parse(selectedArticle.content)}-->
				</div>
			</div>
		</div>
	</div>
</div>
{/if}
