<script lang="ts">
  import { writable } from 'svelte/store'
  import { tweened } from 'svelte/motion'
  import { cubicOut } from 'svelte/easing'

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut,
  })
</script>

<progress value={$progress} />
<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.25)}>25%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1.0)}>100%</button>

<style>
  progress {
    display: block;
    width: 100%;
    margin: 10px;
  }
</style>
