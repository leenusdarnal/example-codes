<script lang="ts">
	import { invalidate } from '$app/navigation'

	export let data
	const refresh = () => {
		invalidate('stocks:actively-trading')
	}
</script>

<h1 class="text-3xl">Actively Trading Stocks</h1>
{#each data.stocks as stock}
	<h2>{stock.symbol} -${stock.price}</h2>
{/each}

<button on:click={refresh} class="rounded border border-slate-800 bg-slate-950 p-2 text-white"
	>refresh</button
>
