import { useState, useEffect } from 'react';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';
import Reservation from './Reservation';

const Reservationlist = () => {
  const [reservations, setReservations] = useState([]);
  const [deleted, setDeleted] = useState('random');
  const authorization = useAuth();
  useEffect(() => {
    console.log('token', authorization.auth.token);

    fetch(config.apiurl + '/reservation', {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setReservations(resp.data.reservations);
        console.log(resp.data.reservations);
      });
  }, [deleted]);

  return (
    <div className='container first'>
      {!reservations.length ? (
        'Loading Reservations'
      ) : (
        <table className='table table-bordered'>
          <thead className='table-head'>
            <tr>
              <th className='text-center' scope='col'>
                ID
              </th>
              <th className='text-center' scope='col'>
                Client Name
              </th>
              <th className='text-center' scope='col'>
                Phone no
              </th>
              <th className='text-center' scope='col'>
                Date & Time
              </th>
              <th className='text-center' scope='col'>
                No. of People
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
            {reservations.map((reservation, indx) => (
              <Reservation
                id={indx}
                people={reservation.people}
                _id={reservation._id}
                clientName={reservation.clientName}
                reservationDate={reservation.reservationDate}
                contactNumber={reservation.contactNumber}
                setDeleted={setDeleted}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Reservationlist;
