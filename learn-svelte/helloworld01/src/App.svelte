<script lang="ts">
  import Color from './Events/Color.svelte'
  import Counted from './Events/Counted.svelte'
  import Counter from './Events/Counter.svelte'
  import EventDispatcher from './Events/EventDispatcher.svelte'
  import AwaitRandomNumber from './Events/AwaitRandomNumber.svelte'
  import PressBigButton from './Events/PressBigButton.svelte'
  import RemoveThings from './Events/RemoveThings.svelte'
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
<hr />
<PressBigButton />
<hr />

<style>
  hr {
    margin-top: 2em;
  }
</style>
