<script lang="ts">
	import { goto, preloadData } from '$app/navigation'
	export let data
</script>

<div class=" m-10 flex flex-col items-center justify-center gap-10"></div>
<h1 class="text-4xl">Welcome to SvelteKit @ {data.currentTime}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<!-- <a href="/products" data-sveltekit-preload-code="eager">Product page</a> -->
<a href="/address">Adress Page</a>
<a href="/stocks">Stock Page</a>
<button
	on:mouseover={async () => {
		await preloadData('/products')
	}}
	on:focus={async () => {
		await preloadData('/products')
	}}
	on:click={() => goto('/products')}>GO To Products</button
>
