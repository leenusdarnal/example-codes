<script lang="ts">
	export let productId = 100
</script>

<a href="/" class="text-green-700">Home</a>
<h2><a href="/products/1"> Product 1 </a></h2>
<h2><a href="/products/2"> Product 2 </a></h2>
<h2><a href="/products/3"> Product 3 </a></h2>
<h2><a href={`/products/${productId}`}>Product {productId}</a></h2>
