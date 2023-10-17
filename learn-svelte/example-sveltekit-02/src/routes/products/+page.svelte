<script lang="ts">
	export let data
	const { products, Component, title } = data
</script>

<a href="/">Home Page</a>
<h1>{title}</h1>

{#each products as product}
	<div>
		<Component {product} />
	</div>
	<hr />
{/each}
