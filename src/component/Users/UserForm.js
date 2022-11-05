import '../../pages/login_page/login.css';
import avatar from '../../pages/login_page/avatar.png';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';
import { useState } from 'react';

const UserForm = () => {
  const navigate = useNavigate();
  const authorization = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(config.apiurl + '/users/create-user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
      body: JSON.stringify({
        name,
        password,
        passwordConfirm,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'Success') {
          alert('User added');
          setDisable(false);
          navigate('/home/users');
        } else {
          setDisable(false);
          alert(res.message);
        }
      })
      .catch((err) => console.log('error: ', err));
  };
  return (
    <div className='parent'>
      <div className='form-box create-user-box-size'>
        <img src={avatar} className='avatar' alt='avatar' />
        <h1>Create New User</h1>
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
          <p>Confirm Password</p>
          <input
            type='password'
            name='confirm_password'
            placeholder='Confirm Password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <input
            type='submit'
            name='submit'
            value='Create User'
            disabled={disable}
            style={{ backgroundColor: disable ? '#999999' : '' }}
          />
        </form>
      </div>
    </div>
  );
};

export default UserForm;
