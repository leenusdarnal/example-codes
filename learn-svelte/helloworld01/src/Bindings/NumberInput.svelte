<script lang="ts">
  let a = 1
  let b = 10
</script>

<label>
  <input type="number" bind:value={a} max="10" />
  <input type="range" bind:value={a} max="10" />
</label>
<br />

<label>
  <input type="number" bind:value={b} max="10" />
  <input type="range" bind:value={b} max="10" />
</label>

<p>{a} + {b} = {a + b}</p>
