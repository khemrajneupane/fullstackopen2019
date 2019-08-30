import Blog from "./Blog";
import React from "react";
const UserBlogInfo = ({ info, username, blog }) => {
  const filterUsers = info.filter(u => u.username === username);
  const blogInfo = filterUsers.map(u =>
    u.blogs.map(b => <p key={b.id}>{`${b.author} logged in`}</p>)
  );

  return (
    <div>
      blogs
      {blogInfo}
      <div>
        {`All blogs `}
        <Blog blog={blog} />
      </div>
    </div>
  );
};

export default UserBlogInfo;
