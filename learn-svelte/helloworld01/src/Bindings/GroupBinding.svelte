<script lang="ts">
  let scoops = 1
  let flavours = []
  const formatter = ''
</script>

<h2>Size</h2>

{#each [1, 2, 3] as number}
  <label>
    <input type="radio" name="scoops" value={number} bind:group={scoops} />
    {number}{number === 1 ? ' scoop' : ' scoops'}
  </label>
  <br />
{/each}

<h2>Flavours</h2>

{#each ['cookes and cream', 'mint choco chip', 'rasberry ripple'] as flavour}
  <label>
    <input
      type="checkbox"
      name="flavours"
      value={flavour}
      bind:group={flavours}
    />
    {flavour}
  </label>
  <br />
{/each}

{#if flavours.length === 0}
  <p>Please Select at leat one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't Order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops === 1 ? ' scoop' : ' scoops'} of {flavours}
  </p>
{/if}
