<script lang="ts">
	export let form
</script>

<form
	method="post"
	action="/auth?/login"
	class="flex w-96 flex-col items-center justify-center gap-10"
>
	<p>{form?.message || ''}</p>
	<input
		class=" w-full rounded border p-2"
		type="text"
		name="username"
		placeholder="username"
	/>
	<input
		class=" w-full rounded border p-2"
		type="password"
		name="password"
		placeholder="password"
	/>
	<button class="w-full rounded bg-slate-800 p-2 text-white" type="submit"
		>Login</button
	>
	<button
		class="w-full rounded bg-slate-800 p-2 text-white"
		type="submit"
		formaction="/auth?/register">Register</button
	>
</form>
