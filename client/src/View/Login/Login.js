import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../Component/Navbar/Navbar.js';



export default function Login() {
  const [Login, setLogin] = useState([]); // Store login data
  const [UserName, setUserName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const loginprocess = async (event) => {
    event.preventDefault();
    try {
      // Perform login
      const response = await axios.post(`http://localhost:4000/login`, {
        UserName: UserName,
        Email: Email,
        Password: Password,
      });
      toast.success('Login successfully');
      
      // Clear form inputs
      setUserName('');
      setEmail('');
      setPassword('');

      // Refresh the login data after a successful login
      await getlogin();
    } catch (e) {
      console.log(e.message);
      toast.error('Failed to login');
    }
  };

  const getlogin = async () => {
    try {
      // Fetch the login data
      const response = await axios.get(`http://localhost:4000/logins`);
      const logindata = response.data.data;
      console.log(logindata);

      // Ensure you update the state correctly
      if (logindata && Array.isArray(logindata)) {
        setLogin(logindata);
      }
    } catch (e) {
      console.error('Failed to fetch login data', e);
    }
  };

  useEffect(() => {
    // Fetch login data on initial load
    getlogin();
  }, []);

  return (
    <>
    <Navbar/>
      <h1 className='main-login'>Login</h1>
      <form onSubmit={loginprocess}>
        <div className='back'>
          <div className='login-div'>
            <input
              type='text'
              placeholder='Enter the Email'
              required
              className='name-input'
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type='password'
              placeholder='Password'
              required
              className='name-input'
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type='submit' className='btn'>
              Login
            </button>
          </div>
        </div>
      </form>
<ToastContainer/>
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
