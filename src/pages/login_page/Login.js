import './login.css';
import avatar from './avatar.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import { Navigate } from 'react-router-dom';
import config  from '../../config';
const processResponse = (response, setAuth, navigate) => {
  if(response.status === "success" && response.token) {
    setAuth(response.token, response.data.user.isAdmin, response.data.user.name);
    navigate('/home');
  }
  else {
    alert(response.message);
  }
}

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const authentication = useAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(config.apiurl + "/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({name, password})
    })
    .then(res => res.json())
    .then(res => {processResponse(res, authentication.setAuthr, navigate)})
    .catch(err => console.log("error", err));
  };

  if(authentication.auth.isLoggedIn) {
    return <Navigate to="/home" replace />
  }

  return (
    <div className='form-box login-box-size '>
      <img src={avatar} className='avatar' alt='avatar' />
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input 
          type='text' 
          name='username' 
          placeholder='Enter Username'  
          value={name}
          onChange={(e) => setName(e.target.value)}  
        />
        <p>Password</p>
        <input 
          type='password'  
          name='password' 
          placeholder='Enter Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />
        <input type='submit' name='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
