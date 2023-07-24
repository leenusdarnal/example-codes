<script lang="ts">
  let count = 0
  const increment = () => (count += 1)
</script>

<button type="button" on:click={increment}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
{#if count > 10}
  <p>{count} is greater than 10</p>
{:else if count < 5}
  <p>{count} is less than 5</p>
{:else}
  <p>{count} is between 5 and 10</p>
{/if}
