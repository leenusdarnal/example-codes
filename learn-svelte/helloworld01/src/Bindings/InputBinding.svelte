<script lang="ts">
  let name = 'world'
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>

<style>
  input {
    height: max-content;
    width: max-content;
  }
  h1 {
    word-wrap: break-word;
  }
</style>
