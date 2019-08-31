import Blog from "./Blog";
import React from "react";
import AddBlogsForm from "./AddBlogsForm";
import LogOut from "./LogOut";
const UserBlogInfo = ({
  deleteList,
  username,
  blog,
  onSubmit,
  handleTitle,
  handleAuthor,
  handleUrl,
  handleLikes,
  likes,
  url,
  author,
  title
}) => {
  return (
    <div>
      blogs
      <p>
        {`${username} is logged in`} <LogOut />
      </p>
      <div>
        {`All blogs `}
        <Blog blog={blog} deleteList={deleteList} />
      </div>
      <p>add Blogs</p>
      <div>
        {" "}
        <AddBlogsForm
          onSubmit={onSubmit}
          handleTitle={handleTitle}
          handleAuthor={handleAuthor}
          handleUrl={handleUrl}
          handleLikes={handleLikes}
          likes={likes}
          url={url}
          author={author}
          title={title}
        />
      </div>
    </div>
  );
};

export default UserBlogInfo;
