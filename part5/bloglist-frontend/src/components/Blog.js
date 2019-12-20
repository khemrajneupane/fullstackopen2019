import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../index.css";
import blogService from "../services/blogs";

const Blog = ({ blog, deleteList, setBlogs }) => {
  const [itemObj, setItemObj] = useState([]);
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  useEffect(() => {
    blogService.getAll().then(initialBlogs => setBlogs(initialBlogs));
  }, [setBlogs]);

  const addLikes = async blog => {
    try {
      const blogObj = { ...blog };
      blogObj.likes++;
      await blogService.updateLikes(blogObj.id, blog);
      setItemObj(blogObj);
    } catch (error) {
      alert(`${error.message}! Please refresh the page!`);
    }
  };

  const createEachItems = async item =>
    await setItemObj({
      title: item.title,
      author: item.author,
      url: item.url,
      likes: item.likes,
      id: item.id
    });

  const itemsTitleAuthor = blog.map(item => {
    const thisUser = window.localStorage.getItem("loggedUser");
    const thisUserName = JSON.parse(thisUser).username;
    const isLogged = item.user.username.indexOf(thisUserName) > -1;

    return (
      <div key={item.title} className="blogStyle">
        <span
          style={hideWhenVisible}
          onClick={toggleVisibility}
          className="ptr"
        >
          {item.title}
        </span>
        <div
          key={item.id}
          onClick={() => createEachItems(item)}
          className="ptr"
        >
          {item.author}
          {isLogged ? (
            <button onClick={() => deleteList(item, setItemObj)}>remove</button>
          ) : (
            <button className="hide"></button>
          )}
        </div>
      </div>
    );
  });
  const eachItems = () =>
    itemObj.title === undefined ? (
      <div className="hide"></div>
    ) : (
      <div className="eachBlogStyle">
        <span
          style={showWhenVisible}
          onClick={toggleVisibility}
          className="ptr"
        >
          {itemObj.title}
        </span>

        {` ${itemObj.url}
      ${itemObj.likes} likes `}
        <button onClick={() => addLikes(itemObj)}>like</button>

        {` added by ${itemObj.author}`}
      </div>
    );
  return (
    <div>
      {eachItems()}
      {itemsTitleAuthor}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.array.isRequired,
  deleteList: PropTypes.func.isRequired,
  setBlogs: PropTypes.func.isRequired
};

export default Blog;
