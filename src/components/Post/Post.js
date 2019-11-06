import React from 'react';
import Comment from '../Comment.js';

function Post({ post }) {
  return (
    <div className="post">
      <div className="post-info">
        <div className="post-info-owner">
          <div className="owner-avatar">
            <img src={post.owner.avatar} />
          </div>
          <div className="owner-name">
            <p>{post.owner.name}</p>
            <p>{post.createdAt}</p>
          </div>
        </div>
        <div className="post-info-content">
          <p>{post.content}</p>
        </div>
      </div>
      <div class="post-space"></div>
      <div className="post-comments">
        {post.comments.map(c => <Comment comment={c} key={c.id} />)}
      </div>
    </div>
  )
}

export default Post;