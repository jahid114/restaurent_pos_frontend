const index = () => {
  return (
    <div class='header'>
      <h3>Welcome</h3>
      <div class='button'>
        <button class='create_user'>Create Order</button>
      </div>

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
        <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
          <a class='dropdown-item' href='#'>
            Logout
          </a>
        </div>
      </li>
    </div>
  );
};

export default index;
