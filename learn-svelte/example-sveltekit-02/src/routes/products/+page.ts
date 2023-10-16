export const load = async ({ fetch }) => {
	const title = 'List of available products'
	const response = await fetch('http://127.0.0.1:4000/products')
	const products = await response.json()

	return {
		title,
		products
	}
}
