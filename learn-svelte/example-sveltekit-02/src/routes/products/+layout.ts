import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ fetch, parent }) => {
	const { username } = await parent()

	const title = 'Featured Products'
	const response = await fetch('http://localhost:4000/featured-products')
	const featuredProducts = await response.json()
	return {
		title,
		featuredProducts,
		username
	}
}
