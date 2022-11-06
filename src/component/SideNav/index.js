import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const SideNav = () => {
  const { auth } = useAuth();
  const [active, setActive] = useState('dashboard');
  return (
    <div className='sidebar'>
      <h3>Rest_POS</h3>
      <ul className='list'>
        <li className={active === 'dashboard' ? 'active' : ''} onClick={(e) => setActive('dashboard')}>
          <Link to='/home/dashboard'>
            <i className='fas fa-home'></i>Dashboard
          </Link>
        </li>
        {auth.isAdmin && (
          <li className={active === 'admin' ? 'active' : ''} onClick={(e) => setActive('admin')}>
            <Link to='/home/users'>
              <i className='fas fa-user'></i>Users
            </Link>
          </li>
        )}
        <li className={active === 'item' ? 'active' : ''} onClick={(e) => setActive('item')}>
          <Link to='/home/items'>
            <i className='fas fa-address-book'></i>Items
          </Link>
        </li>
        <li className={active === 'order' ? 'active' : ''} onClick={(e) => setActive('order')}>
          <Link to='/home/orders'>
            <i className='fas fa-address-card'></i>Orders
          </Link>
        </li>
        <li className={active === 'reservation' ? 'active' : ''} onClick={(e) => setActive('reservation')}>
          <Link to='/home/reservation'>
            <i className='fas fa-address-book'></i>Reservations
          </Link>
        </li>
        <li className={active === 'expense' ? 'active' : ''} onClick={(e) => setActive('expense')}>
          <Link to='/home/expense'>
            <i className='fas fa-solid fa-dollar-sign'></i>Expense
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
