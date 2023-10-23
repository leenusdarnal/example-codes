<script lang="ts">
	let name = ''
	let email = ''
	let message = ''
	export const snapshot = {
		capture: () => {
			return { name, email, message }
		},

		restore: (data) => {
			name = data.name
			email = data.email
			message = data.message
		}
	}
</script>

<h1 class="text-4xl">Contact Form</h1>
<form class="flex w-96 flex-col gap-12 p-5 outline">
	<div>
		<input
			class="h-10 w-full px-3 outline"
			type="text"
			name="name "
			placeholder="Name"
			bind:value={name}
		/>
	</div>
	<div>
		<input
			class="h-10 w-full px-3 outline"
			type="email"
			name="email"
			placeholder="Email"
			bind:value={email}
		/>
	</div>
	<div>
		<textarea
			class=" h-28 w-full p-2 outline"
			name="message"
			placeholder="Enter your message here"
			bind:value={message}
		/>
	</div>
	<div class="flex w-full justify-evenly">
		<button class="rounded bg-slate-800 p-2 text-slate-50">Send</button>
		<a class="rounded pt-2" href="/">Cancel</a>
	</div>
</form>
