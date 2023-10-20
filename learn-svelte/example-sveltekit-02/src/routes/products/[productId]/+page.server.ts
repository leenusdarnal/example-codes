import type { Product } from '$lib/types'
import {
	error
	// redirect
} from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

type ProductType = Product & {
	price: string
}

export const load: PageServerLoad = async ({ fetch, params, url, route }) => {
	const { productId } = params
	console.log({ params, url, route })
	if (parseInt(productId) > 3) {
		throw error(404, { message: 'Oh no Product not Found' })
		// throw redirect(307, '/products')
	}

	const title = 'Product Details'
	const response = await fetch(`http://localhost:4000/products/${productId}`)
	const product = (await response.json()) as ProductType
	const notification = `End of season slae 50% off from productId page`
	return {
		title,
		product,
		notification
	}
}

export const prerender = 'auto'