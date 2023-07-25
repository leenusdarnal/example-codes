<script lang="ts">
  let answer = false
</script>

<lable>
  <input type="checkbox" bind:checked={answer} />
  Yes! Send me regular email spam
</lable>

{#if answer}
  <p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
  <p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}

<button disabled={!answer}>Subscribe</button>
