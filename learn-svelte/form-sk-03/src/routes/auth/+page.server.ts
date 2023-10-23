import { fail, redirect } from '@sveltejs/kit'

export const actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')
		if (!username || !password) {
			return fail(400, {
				username: username,
				message: 'Missing username or password'
			})
		}
		cookies.set('username', username.toString(), { path: '/' })
		throw redirect(303, url.searchParams.get('redirectTo') || '/')
	},
	register: async ({ request, cookies }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')
		if (!username || !password) {
			return fail(400, {
				username: username,
				message: 'Missing username or password'
			})
		}
		cookies.set('username', username.toString(), { path: '/' })
		return { message: 'Successsfully Registered' }
	}
}
