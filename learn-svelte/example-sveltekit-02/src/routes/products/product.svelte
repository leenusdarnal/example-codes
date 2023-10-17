<script lang="ts">
	import type { Product } from '$lib/types'
	export let product: Product
</script>

<h1>{product.title}</h1>
<p>{product.description}</p>
