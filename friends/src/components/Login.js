import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [creds, setCreds] = useState(initialValues);
  const history = useHistory();

  const handleChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", creds)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/dashboard");
      });
  };

  return (
    <section className='pg login-pg'>
      <h2>Login to Get Started</h2>
      <form onSubmit={handleLogin}>
        <input
          type='text'
          name='username'
          placeholder='Frances_crane'
          value={creds.username}
          onChange={handleChange}
        ></input>
        <input
          type='password'
          name='password'
          placeholder='Password123@'
          value={creds.password}
          onChange={handleChange}
        ></input>
        <button>Sign In</button>
      </form>
    </section>
  );
};

export default Login;
