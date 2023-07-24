<script lang="ts">
  import AwaitRandomNumber from './AwaitRandomNumber.svelte'
  import Color from './Color.svelte'
  import Counted from './Counted.svelte'
  import Counter from './Counter.svelte'
  import DomEventMouse from './DomEventMouse.svelte'
  import EventDispatcher from './EventDispatcher.svelte'
  import RemoveThings from './RemoveThings.svelte'
</script>

<Counter />
<hr />
<Counted />
<hr />
<Color />
<hr />
<RemoveThings />
<hr />
<AwaitRandomNumber />
<hr />
<!-- <DomEventMouse /> -->

<!-- Event Modifier -->
<button type="button" on:click|once={() => alert('WTF')}> CLick ME </button>
<hr />
<EventDispatcher />

<style>
  hr {
    margin-top: 2em;
  }
</style>
