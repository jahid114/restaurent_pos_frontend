/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';

const TodaysReservationlist = () => {
  const [reservations, setReservations] = useState([]);
  const authorization = useAuth();
  useEffect(() => {
    fetch(config.apiurl + '/reservation/todays-reservation', {
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setReservations(resp.data.todaysReservation);
      });
  }, []);

  return (
    <div className='container first'>
      {!reservations.length ? (
        'No Reservation for today'
      ) : (
        <table className='table table-bordered'>
          <thead className='table-head'>
            <tr>
              <th className='text-center' scope='col'>
                #
              </th>
              <th className='text-center' scope='col'>
                Client Name
              </th>
              <th className='text-center' scope='col'>
                Phone no
              </th>
              <th className='text-center' scope='col'>
                No. of People
              </th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, id) => (
              <tr key={reservation._id}>
                <th className='text-center' scope='row'>
                  {id + 1}
                </th>
                <td className='text-center'>{reservation.clientName}</td>
                <td className='text-center'>{reservation.contactNumber}</td>
                <td className='text-center'>{reservation.people}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodaysReservationlist;
