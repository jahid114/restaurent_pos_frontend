/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';

const processLogout = (response, navigate, setAuth) => {
  if(response.status === "success") {
    // clear local storage
    localStorage.clear()

    // update the auth storage
    setAuth();
    navigate("/login")
  }
} 

const NavBar = () => {
  const navigate = useNavigate();
  const authentication = useAuth();

  const handleLogOut = () => {
    fetch(config.apiurl + "/users/logout", {
      credentials: "include",
     
    })
    .then(res => res.json())
    .then(res => {processLogout(res, navigate, authentication.setAuthr)})
    .catch(err => console.log(err));
  };
  return (
    <div class='header'>
      <h3>Welcome</h3>
      <li class='nav-item dropdown'>
        <a
          href='#'
          class='nav-link dropdown-toggle'
          id='navbarDropdown'
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          {authentication.auth.name}
        </a>
        <div onClick={handleLogOut} class='dropdown-menu' aria-labelledby='navbarDropdown'>
          <a class='dropdown-item' href='#'>
            Logout
          </a>
        </div>
      </li>
    </div>
  );
};

export default NavBar;
