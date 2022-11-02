/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate('/login');
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
          Md Janea Alam
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
