<script lang="ts">
	export let data
	const title = data.title
	const featuredProducts = data.featuredProducts
	const username = data.username
</script>

<slot />

<h2 class="text-3xl font-bold">{title} for {username}</h2>
<div class=" flex flex-row gap-10">
	{#each featuredProducts as product}
		<div class=" border border-solid border-gray-600 p-5">
			<h1>{product.title}</h1>
			<p>{product.description}</p>
		</div>
	{/each}
</div>
