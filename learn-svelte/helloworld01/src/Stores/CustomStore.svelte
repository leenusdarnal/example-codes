<script lang="ts">
  import { count } from './CustomStore/store'
</script>

<h1>The Count is {$count}</h1>
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>Reset</button>
