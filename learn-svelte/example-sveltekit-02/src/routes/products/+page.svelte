<script lang="ts">
	export let data
	const { products } = data
</script>

<a href="/">Home Page</a>
<h1>{data.title}</h1>

{#each products as product}
	<div>
		<div>{product.title}</div>
		<p>{product.description}</p>
	</div>
	<hr />
{/each}
