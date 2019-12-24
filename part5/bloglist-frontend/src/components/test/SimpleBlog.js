import React from 'react'

const SimpleBlog = ({ blog, onClick }) => (
  <div>
    <div>
      {blog.title} {blog.author} {blog.likes}
    </div>
    <div>
      blog has {blog.likes} likes
      <button data-testid="addLikes" onClick={onClick}>like</button>
    </div>
  </div>
)

export default SimpleBlog