<script lang="ts">
	let address = ''
	export let data
	const { addressList } = data
</script>

<a href="/">Home</a>

<h1>Select Your Address</h1>
<select bind:value={address}>
	<option value="">Pick an Address</option>
	{#each addressList as addressItem}
		<option value={addressItem}>{addressItem} </option>
	{/each}
</select>

<style>
	select {
		border: 1px solid grey;
		border-radius: 200px;
	}
</style>
