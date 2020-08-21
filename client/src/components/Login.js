import React, { useState } from "react";
import { axiosWithAuth } from "../components/utils/axiosWithAuth"

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials] = useState(initialState);
  // console.log('BEA this is: props object login.js:', props)

  const handleChange = (e) => {//update the state/credentials
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => { 
        // console.log('BEA: after login response', res)
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <h2>Log In</h2>
      <label>Username:</label>
      <form onSubmit={login} id="loginForm">
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <br></br>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button id="loginbutton">Log in</button>
      </form>
    </div>
    </>
  );
};

export default Login;
