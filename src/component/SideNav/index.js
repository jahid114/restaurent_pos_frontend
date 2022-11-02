import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div className='sidebar'>
      <h2>Rest_POS</h2>
      <ul className='list'>
        <li>
          <Link to='/home/dashboard'>
            <i className='fas fa-home'></i>Dashboard
          </Link>
        </li>
        <li>
          <Link to='/home/users'>
            <i className='fas fa-user'></i>Users
          </Link>
        </li>
        <li>
          <Link to='/home/items'>
            <i className='fas fa-address-book'></i>Items
          </Link>
        </li>
        <li>
          <Link to='/home/orders'>
            <i className='fas fa-address-card'></i>Orders
          </Link>
        </li>
        <li>
          <Link to='/home/receipts'>
            <i className='fas fa-sharp fa-solid fa-file-invoice'></i>Receipts
          </Link>
        </li>
        <li>
          <Link to='/home/reservation'>
            <i className='fas fa-address-book'></i>Reservations
          </Link>
        </li>
        <li>
          <Link to='/home/expense'>
            <i className='fas fa-solid fa-dollar-sign'></i>Expense
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
