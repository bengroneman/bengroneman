<script context="module">
    export async function load({ fetch }) {
        const response = await fetch('/api/articles');
        if (response.ok) return { props: { articles: await response.json() } };
        return {
            status: response.status,
            error: new Error()
        };
    }
</script>
<script>
    import { blogArticles } from "../../stores/blog.js";
    import { onMount } from "svelte";
    export let articles
    onMount(() => {
        blogArticles.set(articles);
        console.log($blogArticles)
    });
</script>
<slot/>
