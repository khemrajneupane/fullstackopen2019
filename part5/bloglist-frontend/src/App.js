import React, { useState, useEffect } from "react";
import blogService from "./services/blogs";
import loginService from "./services/login";

import "./index.css";
import UserBlogInfo from "./components/UserBlogInfo";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    if (message === null || errorMessage != null) {
      return <div className="errorMessage">{errorMessage}</div>;
    } else if (message != null || errorMessage === null) {
      return <div className="message">{message}</div>;
    }
  };

  useEffect(() => {
    blogService.getAll().then(initialBlogs => setBlogs(initialBlogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);
  //console.log(user);
  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });
      window.localStorage.setItem("loggedUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
      setUsername(username);
      setPassword("");
      //console.log(user.token)
    } catch (e) {
      //console.log(e);
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
    setLikes(event.target.value);
  };
  //console.log("username: ",username)
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const addBlog = event => {
    event.preventDefault();

    const newObject = {
      title,
      author,
      url,
      likes
    };
    console.log(blogs);
    const check = blogs.map(a => a.author.indexOf(newObject.author));
    const ifTrue = check.indexOf(0) > -1;
    if (!newObject.title || !newObject.author || !newObject.url) {
      setErrorMessage("one or many fields missing!");
      setNullMessage();
      setBlogs(blogs);
    } else if (ifTrue) {
      const thisPerson = blogs.filter(
        blogs => !blogs.author.indexOf(newObject.author)
      )[0];
      setErrorMessage(
        `${thisPerson.author} is already existing in the database`
      );
      setNullMessage();
    } else {
      blogService
        .create(newObject)

        .then(req => setBlogs(blogs.concat(req)))
        .catch(error => {
          //setBlogs(blogs)
          //console.log(error.message)
          setErrorMessage(error.message);
          setNullMessage();
        });
      setMessage(`a new blog ${newObject.title} by ${newObject.author} added `);
      setNullMessage();
      setTitle("");
      setAuthor("");
      setUrl("");
      setLikes("");
    }
  };

  const deleteList = blog => {
    const { id, author } = blog;
    let r = window.confirm(`delete ${author} ?`);
    if (r === true) {
      //console.log(user.token);
      blogService
        .deleteList(id, user.token)
        .then(request => {
          setMessage(
            `Information of ${author} has been removed from the server.`
          );
          setNullMessage();
        })
        .catch(error => {
          //console.log(error.message);
          setBlogs(blogs);
          setErrorMessage(
            `You have no permission to delete ${author} from the server.
            You cannot delete others blogs!`
          );
          setNullMessage();
        });
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
      {message != null || errorMessage != null ? (
        <Notification message={message} errorMessage={errorMessage} />
      ) : null}

      {user === null ? (
        <LoginForm
          onSubmit={handleLogin}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
        />
      ) : (
        <UserBlogInfo
          username={username}
          blog={blogs}
          blogs={blogs}
          onSubmit={addBlog}
          handleTitle={handleTitle}
          handleAuthor={handleAuthor}
          handleUrl={handleUrl}
          handleLikes={handleLikes}
          url={url}
          author={author}
          likes={likes}
          title={title}
          deleteList={deleteList}
        />
      )}
    </div>
  );
};

export default App;
