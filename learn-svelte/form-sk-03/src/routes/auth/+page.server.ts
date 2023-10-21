import { fail } from '@sveltejs/kit'

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')
		if (!username || !password) {
			return fail(400, {
				username: username,
				message: 'Missing username or password'
			})
		}
		cookies.set('login', username.toString(), { path: '/' })
		return { message: 'Logged in' }
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
		cookies.set('register', username.toString(), { path: '/' })
		return { message: 'Successsfully Registered' }
	}
}
