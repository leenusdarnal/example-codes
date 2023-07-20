<script lang="ts">
  import Nested from './Nested.svelte'
  let name = ' Svelte'
  let string =
    'This is a test sting for <strong><marquee>html</marquee></strong>'
  let src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png?20191219133350'
  export let count = 0

  const increment = () => (count += 1)

  $: doubled = count * 2
  $: {
    console.log(`the count is ${count}`)
    console.log('This will logged when ever count changes')
  }

  $: if (count >= 10) {
    alert('count is dangerously high!')
    count = 0
  }
  let numbers = [1, 2, 3, 4, 5]
  const addNumber = () => {
    // numbers.push(numbers.length + 1) doesn't work with reactivity
    // numbers = [...numbers, numbers.length + 1]
    numbers[numbers.length] = numbers.length + 1
  }

  $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0)
</script>

<button on:click={addNumber}> Add a Number</button>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={increment}>
  Clicked {count}
  {count <= 1 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<Nested {count} />
<Nested />
<h1>Hello {name.toUpperCase()}</h1>
<p>This is a test Paragraph</p>
<p>{@html string}</p>
<img {src} alt="{name} Logo" />

<style>
  p {
    color: goldenrod;
    font-family: cursive;
    font-size: 2em;
  }
</style>
