<script>
  import { afterUpdate, beforeUpdate } from 'svelte'

  let count = 0
  let div

  beforeUpdate(() => {
    console.log(`Before Update count is ${count}`)
    window.scrollTo(0, 0)
  })

  afterUpdate(() => {
    console.log(`After Update count is ${count}`)
  })
  function handleClick() {
    count += 1
  }
</script>

<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? 'time' : 'times'}
</button>
<!-- 
  <script>
	import Eliza from 'elizabot';
	import {
		beforeUpdate,
		afterUpdate
	} from 'svelte';

	let div;
	let autoscroll = false;

	beforeUpdate(() => {
		if (div) {
			const scrollableDistance = div.scrollHeight - div.offsetHeight;
			autoscroll = div.scrollTop > scrollableDistance - 20;
		}
	});

	afterUpdate(() => {
		if (autoscroll) {
			div.scrollTo(0, div.scrollHeight);
		}
	});

	const eliza = new Eliza();
	const pause = (ms) => new Promise((fulfil) => setTimeout(fulfil, ms));

	const typing = { author: 'eliza', text: '...' };

	let comments = [];

	async function handleKeydown(event) {
		if (event.key === 'Enter' && event.target.value) {
			const comment = {
				author: 'user',
				text: event.target.value
			};

			const reply = {
				author: 'eliza',
				text: eliza.transform(comment.text)
			};

			event.target.value = '';
			comments = [...comments, comment];

			await pause(200 * (1 + Math.random()));
			comments = [...comments, typing];

			await pause(500 * (1 + Math.random()));
			comments = [...comments, reply].filter(comment => comment !== typing);
		}
	}
</script>

<div class="container">
	<div class="phone">
		<div class="chat" bind:this={div}>
			<header>
				<h1>Eliza</h1>

				<article class="eliza">
					<span>{eliza.getInitial()}</span>
				</article>
			</header>

			{#each comments as comment}
				<article class={comment.author}>
					<span>{comment.text}</span>
				</article>
			{/each}
		</div>

		<input on:keydown={handleKeydown} />
	</div>
</div>



 -->
