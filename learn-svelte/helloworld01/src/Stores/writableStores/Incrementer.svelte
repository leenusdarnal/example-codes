<script lang="ts">
  import { count } from './store'
  const increment = () => {
    count.update((n) => n + 1)
  }
</script>

<button on:click={increment}> +</button>
