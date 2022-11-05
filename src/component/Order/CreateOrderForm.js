/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import '../../pages/login_page/login.css';
import './formStyle.css';
import { useNavigate } from 'react-router-dom';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';
import { useState, useEffect } from 'react';
import Item from './Item';
import OrderedItem from './OrderedItem';

const processItemList = (response, navigate, setAuth, setItemsList) => {
  if (response.status === 'success') {
    setItemsList(response.data.items);
  } else {
    localStorage.clear();
    setAuth();
    navigate('/login');
  }
};
let count = 0;
const CreateOrderForm = () => {
  const [itemList, setItemsList] = useState([]);
  const [orderedItemList, setOrderedItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToOrderedItemList = (itemId) => {
    let o = itemList.find((e) => e._id === itemId);
    let orderedItem = Object.assign({}, o);
    orderedItem.qty = 1;
    orderedItem.unitPrice = orderedItem.price;
    orderedItem.serial = count++;
    setOrderedItemList((prevState) => [...prevState, orderedItem]);
  };

  const modify = (itemId, offset) => {
    let orderedItem = { ...orderedItemList.find((e) => e._id === itemId) };
    orderedItem.qty = orderedItem.qty + offset;
    orderedItem.price += offset * orderedItem.unitPrice;
    if (orderedItem.qty < 0) orderedItem.qty = orderedItem.price = 0;
    setOrderedItemList((prevState) => {
      return [...prevState.filter((item) => item._id !== itemId), orderedItem].sort((f, s) => f.serial - s.serial);
    });
  };

  const authentication = useAuth();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(config.apiurl + '/orders/create-order', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + authentication.auth.token,
      },
      body: JSON.stringify({
        totalPrice,
        items: orderedItemList.map((item) => ({
          item: item._id,
          quantity: item.qty,
        })),
        status: 'unpaid',
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'Success') {
          alert('order added to the list');
          navigate('/home/orders');
        }
      })
      .catch((err) => console.log('error', err));
  };

  const deleteItem = (itemId) => {
    setOrderedItemList((prev) => [...prev.filter((item) => item._id !== itemId)]);
  };

  useEffect(() => {
    fetch(config.apiurl + '/items', {
      headers: {
        Authorization: 'Bearer ' + authentication.auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        processItemList(res, navigate, authentication.setAuthr, setItemsList);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setTotalPrice(orderedItemList.reduce((prev, cur) => prev + cur.price, 0));
  }, [orderedItemList]);

  return (
    <div className='parent'>
      <div className='mainContent container'>
        <div className='head row'>
          <p>Create Order</p>
        </div>
        <div className='row content mt-9'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='input-group col-sm-6 ml-n3'>
                <input type='text' className='form-control' placeholder='Search' />
                <div className='input-group-append'>
                  <button className='btn btn-dark' type='submit'>
                    Search
                  </button>
                </div>
              </div>
              <div className='dropdown col-sm-6'>
                <button type='button' className='btn btn-dark dropdown-toggle select-option' data-toggle='dropdown'>
                  Select Catagory
                </button>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='#'>
                    Link 1
                  </a>
                  <a className='dropdown-item' href='#'>
                    Link 2
                  </a>
                  <a className='dropdown-item' href='#'>
                    Link 3
                  </a>
                </div>
              </div>
            </div>
            <div className='row mr-1'>
              <table id='order' className='rounded'>
                <tr>
                  <th className='pt-1 pb-1'>ID</th>
                  <th className='pt-1 pb-1'>Name</th>
                  <th className='pt-1 pb-1'>Price</th>
                  <th className='pt-1 pb-1'></th>
                </tr>
                {itemList.map((item, indx) => (
                  <Item
                    name={item.name}
                    price={item.price}
                    id={indx}
                    _id={item._id}
                    isInOrder={orderedItemList.find((e) => e._id === item._id) ? true : false}
                    addToOrderedItemList={addToOrderedItemList}
                  />
                ))}
              </table>
            </div>
            <div className='row'>
              <nav aria-label='Pagination' className='pagination-block'>
                <ul className='pagination'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#' tabindex='-1'>
                      Previous
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item active'>
                    <a className='page-link' href='#'>
                      2 <span className='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row ml-1'>
              <div className='total-board col-sm-12'>
                <h2>Total {totalPrice}</h2>
                <p>{orderedItemList.reduce((prev, cur) => prev + cur.qty, 0)} Items in Order</p>
              </div>
            </div>
            <div className='row ml-1'>
              <table id='total-list' class='rounded'>
                <tr>
                  <th className='pt-1 pb-1'>Product</th>
                  <th className='pt-1 pb-1'>Units</th>
                  <th className='pt-1 pb-1'></th>
                  <th className='pt-1 pb-1'>Total</th>
                  <th className='pt-1 pb-1'></th>
                </tr>
                {orderedItemList.map((item) => (
                  <OrderedItem
                    _id={item._id}
                    name={item.name}
                    price={item.price}
                    qty={item.qty}
                    modify={modify}
                    deleteItem={deleteItem}
                  />
                ))}
              </table>
            </div>
            <div className='table row'>
              <button className='submit btn button-color mb-2' onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderForm;
