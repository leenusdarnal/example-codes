<script lang="ts">
  let questions = [
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ]
  let selected: { id: number; text: string }
  let answer = ''
  const handleSubmit = () => {
    alert(
      `answered question ${selected.id} (${selected.text}) with "${answer}"`
    )
  }
</script>

<h2>Insecurity Questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change={() => (answer = '')}>
    {#each questions as question}
      <option value={question}> {question.text}</option>
    {/each}
  </select>
  <br />
  <br />
  <input bind:value={answer} />
  <br />
  <br />
  <button disabled={!answer} type="submit"> Submit</button>
</form>

<p>selected question {selected ? selected.id : 'Wating....'}</p>
