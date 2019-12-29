import React, { useState, useEffect } from "react";
import blogService from "./services/blogs";
import loginService from "./services/login";

import "./index.css";
import UserBlogInfo from "./components/UserBlogInfo";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [likes, setLikes] = useState(0);

  const setNullMessage = () => {
    setTimeout(() => {
      setMessage(null);
      setErrorMessage(null);
    }, 5000);
  };

  const Notification = ({ message, errorMessage }) => {
    if (message === null || errorMessage !== null) {
      return <div className="errorMessage">{errorMessage}</div>;
    } else if (message !== null || errorMessage === null) {
      return <div className="message">{message}</div>;
    }
  };

  useEffect(() => {
    blogService.getAll().then(initialBlogs => {
      setBlogs(initialBlogs);
    });
  }, [setBlogs]);
  blogs.sort((a, b) => b.likes - a.likes);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  
  const handleLogin = async credentials => {

    try {
      const user = await loginService.login(credentials);
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
    } catch (e) {
      setErrorMessage("Incorrect username or password");
      setNullMessage();
    }
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };
  const handleAuthor = event => {
    setAuthor(event.target.value);
  };
  const handleUrl = event => {
    setUrl(event.target.value);
  };
  const handleLikes = event => {
    setLikes(Number(event.target.value));
  };

  /**Adding a blog conditionally */
  const addBlog = async event => {
    event.preventDefault();

    const newObject = {
      title,
      author,
      url,
      likes,
      user
    };

    const check = blogs.map(a => a.author.indexOf(newObject.author));
    const ifTrue = check.indexOf(0) > -1;
    if (!newObject.title || !newObject.author || !newObject.url) {
      setErrorMessage("one or many fields missing!");
      setNullMessage();
      setBlogs(blogs);
    } else if (ifTrue) {
      const thisPerson = await blogs.filter(
        blogs => !blogs.author.indexOf(newObject.author)
      )[0];
      setErrorMessage(
        `${thisPerson.author} is already existing in the database`
      );
      setNullMessage();
    } else {
      try {
        await blogService.create(newObject, user.token);
        setBlogs(blogs.concat(newObject));
        setMessage(`a new blog ${newObject.title} by ${newObject.author} added `);
        setNullMessage();
        setTitle("");
        setAuthor("");
        setUrl("");
        setLikes("");
      } catch (error) {
        setErrorMessage(error.message);
        setNullMessage();
      }

    }
  };

  /**Delete Function */
  const deleteList = async (item, setItemObj) => {
    const { id, author } = item;
    let r = window.confirm(`delete ${author} ?`);
    if (r === true) {
      try {
        await blogService.deleteList(id, user.token);
        setMessage(
          `Information of ${author} has been removed from the server.`
        );
        setNullMessage();
        setItemObj({});
      } catch (error) {
        setBlogs(blogs);
        setErrorMessage(
          `You have no permission to delete ${author} from the server.
            Please refresh the page and try again!`
        );
        setNullMessage();
      }

      setBlogs(blogs.filter(blog => blog.id !== id));
      setMessage(`${author}'s entry has been erased`);
      setNullMessage();
    } else if (r === false) {
      setMessage(`You did not cancel ${author}'s entry`);
      setNullMessage();
      return;
    }
  };
  

  return (
    <div>
      {message !== null || errorMessage !== null ? (
        <Notification message={message} errorMessage={errorMessage} />
      ) : null}

      {user === null ? (<LoginForm onSubmit={handleLogin}/>) : (
        <UserBlogInfo
          deleteList={deleteList}
          user={user.username}
          blogs={blogs}
          onSubmit={addBlog}
          handleTitle={handleTitle}
          handleAuthor={handleAuthor}
          handleUrl={handleUrl}
          handleLikes={handleLikes}
        />
      )}
    </div>
  );
};

export default App;