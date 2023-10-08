import { comments } from '$lib/comments'
import { json } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

export function GET() {
	return json(comments)
}
export async function POST(RequestEvent: RequestEvent) {
	const { request } = RequestEvent
	const { text } = await request.json()
	const newCommnet = {
		id: comments.length + 1,
		text
	}
	comments.push(newCommnet)
	// return new Response(JSON.stringify(comments), { status: 201 })
	return json(newCommnet, { status: 201 })
}
