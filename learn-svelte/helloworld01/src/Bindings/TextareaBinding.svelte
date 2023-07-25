<script lang="ts">
  import { marked } from 'marked'
  let value = `Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`
</script>

<div class="grid">
  Input <textarea bind:value />

  Output
  <div class="output">{@html marked(value)}</div>
</div>

<!-- .grid {
  display: grid;
  grid-template-columns: 5em 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1em;
  height: 100%;
} -->

<style>
  .grid {
    display: grid;
    grid-template-columns: 5em 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1em;
    height: 100%;
  }
  textarea {
    display: flex;
    resize: none;
    min-height: 7em;
    min-width: 100%;
  }
</style>
