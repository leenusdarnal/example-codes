<script lang="ts">
  import { count } from './store'
  const decrement = () => {
    count.update((n) => n - 1)
  }
</script>

<button on:click={decrement}>-</button>
