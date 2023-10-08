<script lang="ts">
	import '../app.css'
	import Header from '$lib/header.svelte'
	import Footer from '$lib/footer.svelte'
</script>

<div class="flex min-h-screen w-full flex-col">
	<Header />
	<div class=" flex-grow text-center text-3xl">
		<slot />
	</div>
	<Footer />
</div>
