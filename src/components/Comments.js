import React from 'react'

const Comments = ({comments, toggleHide}) => {

  if (!toggleHide) return null

    const {id, user, comment} = comments

    const userComments = comments.map(c => {
        return (
            <>
                <strong>{c.user}</strong>
                <p>{c.comment}</p>
            </>
        )
    }
)

  return (
    <div>
        <h2>{comments.length} Comments</h2>
        <div>{userComments}</div>
    </div>
  )
}

export default Comments