import Home from './pages/home_page/Home';
import Login from './pages/login_page/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Expense from './component/Expense';
import Item from './component/Items';
import Order from './component/Order';
import Receipts from './component/Receipts';
import Reservation from './component/Reservation';
import User from './component/Users';

function App() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='users' element={<User />} />
        <Route path='orders' element={<Order />} />
        <Route path='items' element={<Item />} />
        <Route path='receipts' element={<Receipts />} />
        <Route path='expense' element={<Expense />} />
        <Route path='reservation' element={<Reservation />} />
      </Route>
    </Routes>
  );
}

export default App;
