import Home from './pages/home_page/Home';
import Login from './pages/login_page/Login';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Expense from './component/Expense';
import Item from './component/Items';
import Order from './component/Order';
import Reservation from './component/Reservation';
import User from './component/Users';
import UserForm from './component/Users/UserForm';
import ItemForm from './component/Items/ItemForm';
import ExpenseForm from './component/Expense/ExpenseForm';
import ReservationForm from './component/Reservation/ReservationForm.js';
import CreateOrderForm from './component/Order/CreateOrderForm';
// import useAuth from './hooks/UseAuth';

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
        <Route path='expense' element={<Expense />} />
        <Route path='reservation' element={<Reservation />} />
        <Route path='userForm' element={<UserForm />} />
        <Route path='itemForm' element={<ItemForm />} />
        <Route path='expenseForm' element={<ExpenseForm />} />
        <Route path='reservationForm' element={<ReservationForm />} />
        <Route path='createOrder' element={<CreateOrderForm />} />
      </Route>
    </Routes>
  );
}

export default App;
