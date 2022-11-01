import './login.css';
import avatar from './avatar.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/home');
  };
  return (
    <div className='login-box'>
      <img src={avatar} className='avatar' alt='avatar' />
      <h1>Login Here</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type='text' name='username' placeholder='Enter Username' />
        <p>Password</p>
        <input type='password' name='password' placeholder='Enter Password' />
        <input type='submit' name='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
