import SideNav from '../../component/SideNav';
import Navbar from '../../component/Navbar';
import './home.css';
import { Outlet } from 'react-router';

const Home = () => {
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
