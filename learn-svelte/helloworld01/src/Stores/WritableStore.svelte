<script lang="ts">
  import Decrementer from './writableStores/Decrementer.svelte'
  import Incrementer from './writableStores/Incrementer.svelte'
  import Resetter from './writableStores/Resetter.svelte'
  import { count } from './writableStores/store'

  // let count_value: number
  // // count.subscribe((value) => (count_value = value))
  // const unsubcribe = count.subscribe((value) => (count_value = value))

  // onDestroy(unsubcribe)
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrementer />
<Resetter />
