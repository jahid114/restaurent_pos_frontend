import Home from './pages/Home';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/*'>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='home' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
