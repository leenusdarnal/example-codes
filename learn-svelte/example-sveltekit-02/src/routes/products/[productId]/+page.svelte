<script lang="ts">
	export let data
	const { title, product } = data
</script>

<h1>{title}</h1>
<div>
	<h1>{product.title} - ${product.price}</h1>
	<p>{product.description}</p>
</div>
