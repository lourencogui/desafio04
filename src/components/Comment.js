import React from 'react';

function Comment({ comment }) {
  return (
    <div className="comment">
      <div className="comment-avatar">
        <img src={comment.owner.avatar} />
      </div>
      <div className="comment-content">
        <p><strong>{comment.owner.name}</strong> {comment.content}</p>
      </div>
    </div>
  );
}

export default Comment;