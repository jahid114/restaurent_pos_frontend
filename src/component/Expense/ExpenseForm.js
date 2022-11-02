import '../../pages/login_page/login.css';
import { useNavigate } from 'react-router-dom';

const ExpenseForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home/expense');
  };
  return (
    <div className='parent'>
      <div className='form-box expense-box-size'>
        <h1>Add Expense</h1>
        <form onSubmit={handleSubmit}>
          <p>Category</p>
          <select id='category' required>
            <option value='Others'>Others</option>
            <option value='Rent'>Rent</option>
            <option value='Salary'>Salary</option>
            <option value='Raw materials'>Raw materials</option>
            <option value='Snacks'>Snacks</option>
            <option value='Accessories'>Accessories</option>
          </select>

          <p>Description</p>

          <textarea name='text' id='text' placeholder='Write Description'></textarea>

          <p>Price</p>

          <input type='number' name='price' id='price' required placeholder='Enter Price' />

          <p>Date</p>

          <input type='date' name='date' id='date' required />

          <input type='submit' name='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
