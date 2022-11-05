import '../../pages/login_page/login.css';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import { useState } from 'react';
import config from '../../config';

const ItemForm = () => {
  const { state } = useLocation();

  const navigate = useNavigate();
  const authorization = useAuth();
  const [category, setCategory] = useState(state ? state.catagory : 'others');
  const [name, setName] = useState(state ? state.name : '');
  const [price, setPrice] = useState(state ? state.price : '');
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(config.apiurl + `/items/${state ? state._id : 'additem'}`, {
      method: `${state ? 'PATCH' : 'POST'}`,
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
        if (res.status === 'Success' || res.status === 'success') {
          alert(state ? 'Item updated' : 'Item added');
          setDisable(false);
          navigate('/home/items');
        } else {
          setDisable(false);
          alert(res.message);
        }
      })
      .catch((err) => console.log('error: ', err));
  };
  return (
    <div className='parent'>
      <div className='form-box item-box-size'>
        <h1>{state ? 'Edit Item' : 'Add Item'}</h1>
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
          <input
            type='submit'
            name='submit'
            value='Submit'
            disabled={disable}
            style={{ backgroundColor: disable ? '#999999' : '' }}
          />
        </form>
      </div>
    </div>
  );
};

export default ItemForm;
