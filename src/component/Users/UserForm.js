import '../../pages/login_page/login.css';
import avatar from '../../pages/login_page/avatar.png';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home/users');
  };
  return (
    <div className='parent'>
      <div className='form-box create-user-box-size'>
        <img src={avatar} className='avatar' alt='avatar' />
        <h1>Create New User</h1>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input type='text' name='username' placeholder='Enter Username' />
          <p>Password</p>
          <input type='password' name='password' placeholder='Enter Password' />
          <p>Confirm Password</p>
          <input type='password' name='confirm_password' placeholder='Confirm Password'></input>
          <input type='submit' name='submit' value='Create User' />
        </form>
      </div>
    </div>
  );
};

export default UserForm;
