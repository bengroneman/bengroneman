<script lang="ts">
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { p5 } from 'p5';

	onMount(async () => {
		const library = await import('p5');
		const { default: p5 } = library;

		con;
		if (browser) {
			p5.setup(() => {
				p5.createCanvas(400, 400);
			});
			p5.draw(() => {
				p5.background(220);
			});
		}
	});
</script>

<canvas id="p5-playground" />
