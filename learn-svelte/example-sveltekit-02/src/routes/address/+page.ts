import { browser } from '$app/environment'

export const load = async ({ fetch }) => {
	console.log(`Load function called in page.ts address ${browser}`)

	const response = await fetch('/api/postcodes')
	const postcodes = await response.json()
	const addressList = postcodes.map((postcode) => {
		return `${postcode.buildingName} , ${postcode.line1} , ${postcode.line2} , ${postcode.line3} ,
    ${postcode.town} ,${postcode.country} ,${postcode.postcode}`
	})
	return {
		addressList
	}
}
