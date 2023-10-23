<script lang="ts">
	import { page } from '$app/stores'
	export let form
	const redirectTo = $page.url.searchParams.get('redirectTo') || '/'
</script>

<form
	method="post"
	action="?/login&redirectTo={redirectTo}"
	class="flex w-96 flex-col items-center justify-center gap-10"
>
	<p>{form?.message || ''}</p>
	<input
		class=" w-full rounded border p-2"
		type="text"
		name="username"
		placeholder="username"
		value={form?.username ?? ''}
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
		formaction="?/register&redirectTo={redirectTo}">Register</button
	>
</form>
