<script lang="ts">
  import { fade } from 'svelte/transition'
  let visible = true
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p transition:fade>Fades in an out</p>
{/if}
