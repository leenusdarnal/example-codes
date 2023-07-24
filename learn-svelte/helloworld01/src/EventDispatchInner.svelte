<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()
  const sayHello = () => dispatch('message', { text: 'YOLO' })
</script>

<button type="button" on:click={sayHello}>Click Here to say Hello</button>
