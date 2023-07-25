<!-- <script lang="ts">
  import EventDispatchInner from './EventDispatchInner.svelte'

  const handleMsg = (event: CustomEvent<{ text: string }>) => {
    alert(event.detail.text)
    console.log(typeof event.detail)
  }
</script>

<EventDispatchInner on:message={handleMsg} /> -->

<script lang="ts">
  import Outer from './EventDispatchOuter.svelte'
  function handleMsg(event) {
    alert(event.detail.text)
  }
</script>

<Outer on:message={handleMsg} />
