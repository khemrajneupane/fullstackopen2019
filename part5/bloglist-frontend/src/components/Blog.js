import React from "react";

const Blog = ({ blog }) => {
  const items = blog.map(item => (
    <li key={item.id}>
      {`Title: ${item.title} 
      Author: ${item.author} 
      URL: ${item.url} 
      Likes: ${item.likes}`}
    </li>
  ));
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default Blog;
