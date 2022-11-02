import SideNav from '../../component/SideNav';
import Navbar from '../../component/Navbar';
import './home.css';
import { Outlet } from 'react-router';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const Home = () => {
  const authentication = useAuth();

  if(!authentication.auth.isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return (
    <div className='wrapper'>
      <SideNav />
      <div className='main_content'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
