import { browser } from '$app/environment'
import type { ServerLoad } from '@sveltejs/kit'
export const load: ServerLoad = async ({ fetch }) => {
	console.log(`Load function browser:${browser}`)
	const title = 'List of available products'
	const response = await fetch('http://127.0.0.1:4000/products')
	const products = await response.json()

	return {
		title,
		products
	}
}
