import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Navbar from '../../Component/Navbar/Navbar.js';
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [Login, setLogin] = useState([]); // Store login data
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginprocess = async (event) => {
    event.preventDefault();
    try {
      // Perform login
      const response = await axios.post(
        `http://localhost:4000/api/loginRoutes/login`,
        {
          name: name,
          email: email,
          password: password,
        }
      );
      console.log(response.data);

      if (response.data) {
        localStorage.setItem("customer", JSON.stringify(response.data));
        toast.success("Login successfully");
        setTimeout(() => {
          navigate(`/form`);
        }, 5000);
      }

      // Clear form inputs
      setUserName("");
      setEmail("");
      setPassword("");

      
    } catch (e) {
      console.log(e.message);
      toast.error("Failed to login");
    }
  };

  

  return (
    <>
      {/* <Navbar/> */}
      <h1 className="main-login">Login</h1>
      <form onSubmit={loginprocess}>
        <div className="back">
          <div className="login-div">
            <input
              type="text"
              placeholder="Enter the Email"
              required
              className="name-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              required
              className="name-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="btn">
              Login
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
      {/* Display login data */}
      {/* <div>
        <h2>Login Data</h2>
        {Login.length > 0 ? (
          <ul>
            {Login.map((user) => (
              <li key={user.id}>{user.UserName} - {user.Email}</li>
            ))}
          </ul>
        ) : (
          <p>No login data available.</p>
        )}
      </div> */}
    </>
  );
}
