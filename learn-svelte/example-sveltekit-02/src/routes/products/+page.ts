import Product from './product.svelte'
import type { Product as ProductType } from '$lib/types'
import { browser } from '$app/environment'
import type { Load } from '@sveltejs/kit'

export const load: Load = async (loadEvent) => {
	const { data } = loadEvent
	console.log(`Load function browser:${browser}`)
	// const title = 'List of available products'
	// const response = await fetch('http://127.0.0.1:4000/products')
	// const products = await response.json()
	const { title, products } = data as { title: string; products: ProductType[] }
	const notification = `End of season sale from product page`

	return {
		title,
		products,
		Component: Product,
		notification
	}
}
