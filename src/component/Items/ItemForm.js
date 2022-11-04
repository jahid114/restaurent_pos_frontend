import '../../pages/login_page/login.css';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import { useState } from 'react';
import config from '../../config';

const ItemForm = () => {
  const navigate = useNavigate();
  const authorization = useAuth();
  const [category, setCategory] = useState('others');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [disable, setDisable] = useState(false);

  console.log(category);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(config.apiurl + '/items/additem', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
      body: JSON.stringify({
        catagory: category,
        name,
        price,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'Success') {
          alert('Item added');
          setDisable(false);
          navigate('/home/items');
        }
      })
      .catch((err) => console.log('error: ', err));
  };
  return (
    <div className='parent'>
      <div className='form-box item-box-size'>
        <h1>Add Item</h1>
        <form onSubmit={handleSubmit}>
          <p>Item Name</p>
          <input
            type='text'
            name='item-name'
            id='item-name'
            placeholder='Enter item name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>Category</p>
          <select id='category' required value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value='others'>Others</option>
            <option value='Bengali'>Bengali</option>
            <option value='Indian'>Indian</option>
            <option value='Chinese'>Chinese</option>
            <option value='Arabian'>Arabian</option>
            <option value='Thai'>Thaifood</option>
            <option value='Mexican'>Mexican</option>
          </select>
          <p>Price</p>
          <input
            type='number'
            name='price'
            id='price'
            required
            placeholder='Enter Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input type='submit' name='submit' value='Submit' disabled={disable} />
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
