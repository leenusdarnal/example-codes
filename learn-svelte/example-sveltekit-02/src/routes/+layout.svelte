<script>
	import { page } from '$app/stores'
	import '../app.css'
	export let data
	const { username } = data
</script>

<svelte:head>
	<title>{$page.data.title || 'Demo for Learning SvelteKit'}</title>
</svelte:head>

<div class=" m-10 flex flex-col items-center justify-center gap-10">
	{#if $page.data.notification}
		<p class=" h-10 w-full border border-solid border-gray-500 text-center text-2xl">
			{$page.data.notification}
		</p>
	{/if}
	<div class="text-4xl font-bold">Welcome ,{username}</div>
	<slot />
</div>
