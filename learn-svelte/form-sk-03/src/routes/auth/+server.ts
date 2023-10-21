import { json } from '@sveltejs/kit'

export const POST = async ({ request, cookies }) => {
	const { username, password } = await request.json()
	if (!username || !password) {
		return json({ message: 'Missing username or password' }, { status: 400 })
	}
	cookies.set('username', username, { path: '/' })

	return json({ message: 'Logged in' })
}
