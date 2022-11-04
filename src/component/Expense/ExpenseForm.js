import '../../pages/login_page/login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';

const ExpenseForm = () => {
  const navigate = useNavigate();
  const authorization = useAuth();
  const [category, setCategory] = useState('others');
  const [description, setDescription] = useState('');
  const [expense, setExpense] = useState('');
  const [date, setDate] = useState('');
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(config.apiurl + '/expense/create-expense', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
      body: JSON.stringify({
        category,
        description,
        price: expense,
        date: new Date(date),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          alert('Expense added');
          setDisable(false);
          navigate('/home/expense');
        }
      })
      .catch((err) => console.log('error: ', err));
  };

  return (
    <div className='parent'>
      <div className='form-box expense-box-size'>
        <h1>Add Expense</h1>
        <form onSubmit={handleSubmit}>
          <p>Category</p>
          <select
            id='category'
            required
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value='others'>others</option>
            <option value='Rent'>Rent</option>
            <option value='Salary'>Salary</option>
            <option value='Raw materials'>Raw materials</option>
            <option value='Snacks'>Snacks</option>
            <option value='Accessories'>Accessories</option>
          </select>

          <p>Description</p>

          <textarea
            name='text'
            id='text'
            placeholder='Write Description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>

          <p>Price</p>

          <input
            type='number'
            name='price'
            id='price'
            required
            placeholder='Enter Price'
            value={expense}
            onChange={(e) => {
              setExpense(e.target.value);
            }}
          />

          <p>Date</p>

          <input
            type='date'
            name='date'
            id='date'
            required
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />

          <input
            className={disable && 'disabled-button'}
            type='submit'
            name='submit'
            value='Submit'
            disabled={disable}
          />
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
