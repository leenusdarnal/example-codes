<script lang="ts">
  import Things from './Things.svelte'

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' },
  ]
  const hanldeClick = () => (things = things.slice(1))
</script>

<button type="button" on:click={hanldeClick}>Remove first thing</button>

{#each things as thing (thing.id)}
  <Things name={thing.name} />
{/each}
