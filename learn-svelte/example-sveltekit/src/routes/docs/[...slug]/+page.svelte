<script lang="ts">
	import { page } from '$app/stores'
	const { slug } = $page.params
	const slugArr = slug.split('/')
</script>

<h1>Docs for {slug}</h1>

{#if slugArr.length === 1}
	<h1>Viewing docs for feature {slugArr[0]}</h1>
{:else if slugArr.length === 2}
	<h1>Viewing docs for feature {slugArr[0]} and concept {slugArr[1]}</h1>
{/if}
