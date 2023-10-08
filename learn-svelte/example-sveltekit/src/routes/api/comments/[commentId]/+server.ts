import { comments } from '$lib/comments'
import { json } from '@sveltejs/kit'

export const GET = ({ params }) => {
	const commentId = params.commentId
	const comment = comments.find((comment) => comment.id === parseInt(commentId))
	if (comment) {
		return json(comment)
	}
	return json({ msg: 'comment not found' })
}

export const PATCH = async ({ request, params }) => {
	const { commentId } = params
	const { text }: { text: string } = await request.json()
	const comment = comments.find((comment) => comment.id === parseInt(commentId))
	if (comment) {
		comment.text = text
		return json(comment)
	}
	return json({ msg: 'comment not found' })
}

export const DELETE = async ({ params: { commentId } }) => {
	const deleted = comments.find((comment) => comment.id === parseInt(commentId))
	if (deleted) {
		const index = comments.findIndex((comment) => comment.id === parseInt(commentId))
		comments.splice(index, 1)
		return json(deleted)
	}
	return json({ msg: 'Already deleted' })
}
