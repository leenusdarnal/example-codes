<script lang="ts">
  import EventDispatchInner from './EventDispatchInner.svelte'

  const handleMsg = (event: CustomEvent<{ text: string }>) => {
    alert(event.detail.text)
    console.log(typeof event.detail)
  }
</script>

<EventDispatchInner on:message={handleMsg} />
