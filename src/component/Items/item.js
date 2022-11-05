import { useState } from 'react';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const Item = (prop) => {
  const navigate = useNavigate();

  const { id, name, catagory, price, _id, setDeleted, deleted } = prop;
  const [disable, setDisable] = useState(false);
  const authorization = useAuth();
  const handleDelete = () => {
    setDisable(true);
    fetch(config.apiurl + '/items/' + _id, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((res) => {
        if (res.status === 204) {
          // update the users list
          setDeleted(_id);
          setDisable(false);
        }
      })
      .catch((err) => console.log('error', err));
  };

  const handleEdit = () => {
    navigate('/home/itemForm', {
      state: { name, catagory, _id, price },
    });
  };

  return (
    <tr style={{ backgroundColor: deleted === _id ? '#f08b8b' : '' }}>
      <th className='text-center' scope='row'>
        {id + 1}
      </th>
      <td className='text-center'>{name}</td>
      <td className='text-center'>{catagory}</td>
      <td className='text-center'>{price}</td>
      <td className='text-center'>
        <button className='button' disabled={disable} onClick={handleEdit}>
          <i className='bi bi-pencil-square icon' style={{ color: '#594F8D' }}></i>
        </button>
      </td>
      <td className='text-center'>
        <button className='button' disabled={disable} onClick={handleDelete}>
          <i className='bi bi-trash icon'></i>
        </button>
      </td>
    </tr>
  );
};

export default Item;
