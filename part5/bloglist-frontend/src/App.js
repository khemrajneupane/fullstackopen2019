import React, { useState, useEffect } from "react";
import blogService from "./services/blogs";
import loginService from "./services/login";
import userService from "./services/users";

import "./index.css";
import UserBlogInfo from "./components/UserBlogInfo";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
    userService.getAll().then(Ublog => setUserBlogs(Ublog));
  }, []);
  //console.log(userBlogs) //gets all blogs with users info.

  useEffect(() => {
    blogService.getAll().then(initialBlogs => setBlogs(initialBlogs));
  }, []);
  //console.log(blogs);
  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      setUser(user);
      setUsername(username);
      setPassword("");
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setNullMessage();
    }
  };
  //console.log("username: ",username)
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
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
        <UserBlogInfo info={userBlogs} username={username} blog={blogs} />
      )}
    </div>
  );
};

export default App;
