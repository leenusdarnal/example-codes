import React, { useState } from 'react'

const CommentsPage = () => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const fetchedComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }
  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment: newComment }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    console.log(data)
  }
  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    console.log(data)
    fetchedComments()
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '1rem' }}>
      <input
        type='text'
        onChange={(e) => setNewComment(e.target.value)}
        style={{ margin: '1rem' }}
      />
      <button onClick={submitComment} style={{ margin: '1rem', width: '10em' }}>
        Submit Comment
      </button>
      <button
        onClick={fetchedComments}
        style={{ margin: '1rem', width: '10em' }}
      >
        Load Comments
      </button>
      {comments.map((comment) => {
        return (
          <div key={comment.id} style={{ margin: '1rem' }}>
            {comment.id}.{comment.text}
            <button onClick={() => deleteComment(comment.id)}>
              Delete Comment
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default CommentsPage
