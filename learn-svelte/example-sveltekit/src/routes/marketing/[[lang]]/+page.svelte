<script lang="ts">
	import { page } from '$app/stores'

	const greetings = {
		en: 'Hello!',
		es: 'Hola!',
		fr: 'Bonjour!'
	}
	type lang = 'en' | 'fr' | 'es'
	const lang = ($page.params.lang as lang) || 'en'
	const greeting = greetings[lang]
</script>

<h1>{greeting}</h1>
