import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';

const Itemlist = () => {
  const navigate = useNavigate();
  const authentication = useAuth();
  const [itemList, setItemsList] = useState();

  const processItemList = (response, navigate, setAuth, setItemsList) => {
    console.log(response);
    if (response.status === 200) {
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
  }, []);

  return (
    <div className='container first'>
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
          {itemList &&
            itemList.map((item) => (
              <tr key={item.id}>
                <th className='text-center' scope='row'>
                  {item.id}
                </th>
                <td className='text-center'>{item.name}</td>
                <td className='text-center'>{item.catagory}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center'>
                  <i class='bi bi-pencil-square icon' style={{ color: '#594F8D' }}></i>
                </td>
                <td className='text-center'>
                  <i className='bi bi-trash icon'></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Itemlist;
