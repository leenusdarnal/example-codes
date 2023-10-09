<script lang="ts">
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation'

	const handleClick = () => {
		console.log('Placing your order')
		goto('/products')
	}

	beforeNavigate((navigation) => {
		console.log({ before: navigation })
	})

	afterNavigate((navigation) => {
		console.log({ after: navigation })
	})
</script>

<h1>Hello World</h1>

<a href="blog">Blog</a>
<a href="products">Products</a>

<button class="rounded-lg bg-zinc-950 p-2 text-white" on:click={handleClick}>Place Order</button>
