<script lang="ts">
  let h: number
  let w: number
  let size = 42
  let text = 'edit this text'
</script>

<label>
  <input type="range" bind:value={size} min="1" max="100" />
  font size ({size}px)
</label>
<div bind:clientWidth={w} bind:clientHeight={h}>
  <span style="font-size: {size} px;" contenteditable>text</span>
  <span class="size">{w} x {h}px</span>
</div>

<style>
  div {
    position: relative;
    /* display: ; */
    padding: 0.5rem;
    background: hsla(15, 100%, 50%, 0.1);
  }
  .size {
    position: absolute;
    right: -1px;
    bottom: -1.4em;
    line-height: 1;
    background: hsla(15, 100%, 50%);
    color: white;
    padding: 0.2em 0.5em;
    white-space: pre;
  }
</style>
