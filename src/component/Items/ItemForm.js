import '../../pages/login_page/login.css';
import { useNavigate } from 'react-router-dom';

const ItemForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home/items');
  };
  return (
    <div className='parent'>
      <div className='form-box item-box-size'>
        <h1>Add Item</h1>
        <form onSubmit={handleSubmit}>
          <p>Item Name</p>
          <input type='text' name='item-name' id='item-name' placeholder='Enter item name' />
          <p>Category</p>
          <select id='category' required>
            <option value='others'>Others</option>
            <option value='rent'>Rent</option>
            <option value='accessories'>Accessories</option>
            <option value='breakfast'>Breakfast</option>
            <option value='shopping'>Shopping</option>
            <option value='bill'>Bill</option>
          </select>
          <p>Price</p>
          <input type='number' name='price' id='price' required placeholder='Enter Price' />
          <input type='submit' name='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
