<script lang="ts">
	import { page } from '$app/stores'
	const { productId, reviewId } = $page.params
</script>

<h1>Review {reviewId} for Product {productId}</h1>
