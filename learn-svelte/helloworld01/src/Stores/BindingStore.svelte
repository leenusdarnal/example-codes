<script>
  import { greeting, name } from './BindingStore/store'
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += '!')}>Add exclamation mark!</button>
