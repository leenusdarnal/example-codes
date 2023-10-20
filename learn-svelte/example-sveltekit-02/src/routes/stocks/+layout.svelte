<script lang="ts">
	export let data
</script>

<h1 class="text-4xl">List of Stocks</h1>
<div class="flex gap-20 underline">
	<span>Most active Stock -{data.mostActiveStock.symbol}</span>
	<span> Most Gaining Stock -{data.topGainingStock.symbol}</span>
	<span>Top Losing stock -{data.topLosingStock.symbol}</span>
</div>
<slot />
