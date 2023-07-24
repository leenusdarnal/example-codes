<script lang="ts">
  import { getRandomNumber } from './lib/util'

  let promise = getRandomNumber()

  function handleClick() {
    promise = getRandomNumber()
  }
</script>

<button type="button" on:click={handleClick}> generate random number </button>

{#await promise}
  <p style="color: yellow;">Waiting ....</p>
{:then number}
  <p>Number is {number}</p>
{:catch error}
  <p style="color: red;">{error}</p>
{/await}

<!-- Do this if there is no chance of Promise reject -->
<!-- {#await promise then number}
  <p>The number is {number}</p>
{/await} -->
