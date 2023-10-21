<script lang="ts">
	export let data
</script>

<h1>Today's headline</h1>
{#each data.news as article}
	<h1>{article.title}</h1>
{/each}
