import comments from '../../../../data/comments'

const handler = (req, res) => {
  const { commentId } = req.query
  const comment = comments.find((comment) => comment.id === parseInt(commentId))
  switch (req.method) {
    case 'GET':
      res.status(200).json(comment)
      break
    case 'DELETE':
      res.status(200).json(comment)
      const index = comments.findIndex(
        (comment) => comment.id === parseInt(commentId)
      )
      comments.splice(index, 1)

      break
  }
}

export default handler
