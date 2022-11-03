/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';
import Item from './item';

const Itemlist = () => {
  const navigate = useNavigate();
  const authentication = useAuth();
  const [itemList, setItemsList] = useState([]);
  const [deleted, setDeleted] = useState('random');

  const processItemList = (response, navigate, setAuth, setItemsList) => {
    console.log(response);
    if (response.status === 'success') {
      setItemsList(response.data.items);
    } else {
      localStorage.clear();
      setAuth();
      navigate('/login');
    }
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
  }, [deleted]);

  return (
    <div className='container first'>
      {!itemList.length ? (
        <h6>Loading Item ....</h6>
      ) : (
        <table className='table table-bordered'>
          <thead className='table-head'>
            <tr>
              <th className='text-center' scope='col'>
                ID
              </th>
              <th className='text-center' scope='col'>
                Name
              </th>
              <th className='text-center' scope='col'>
                Category
              </th>
              <th className='text-center' scope='col'>
                Price
              </th>
              <th className='text-center' scope='col'>
                Edit
              </th>
              <th className='text-center' scope='col'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, id) => (
              <Item
                id={id}
                name={item.name}
                _id={item._id}
                catagory={item.catagory}
                price={item.price}
                setDeleted={setDeleted}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Itemlist;
