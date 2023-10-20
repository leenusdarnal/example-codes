<script lang="ts">
	import type { Product } from '$lib/types'
	export let product: Product
</script>

<a href={`/products/${product.id}`}>
	<h1>{product.title}</h1>
</a>
<p>{product.description}</p>
