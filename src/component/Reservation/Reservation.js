import { useState } from 'react';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

const Reservation = (prop) => {
  const { people, clientName, _id, reservationDate, contactNumber, setDeleted, id, deleted } = prop;
  const reservationDateObject = new Date(reservationDate);
  const [disable, setDisable] = useState(false);
  const authorization = useAuth();
  const navigate = useNavigate();

  const handleEdit = () => {
<<<<<<< HEAD
=======
    console.log({ ...prop });
>>>>>>> a5049deb2425834cf5463216ef438859bcb9dc20
    navigate('/home/reservationForm', {
      state: { people, clientName, _id, reservationDate, contactNumber },
    });
  };

  const handleDelete = () => {
    setDisable(true);
    fetch(config.apiurl + '/reservation/' + _id, {
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

  return (
    <tr style={{ backgroundColor: deleted === _id ? '#f08b8b' : '' }}>
      <th className='text-center' scope='row'>
        {id + 1}
      </th>
      <td className='text-center'>{clientName}</td>
      <td className='text-center'>{contactNumber}</td>
      <td className='text-center'>
        <p>{reservationDateObject.toDateString()}</p>
        <p>
          {reservationDateObject.getHours()}
          {':'}
          {reservationDateObject.getMinutes()}
        </p>
      </td>
      <td className='text-center'>{people}</td>
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

export default Reservation;
