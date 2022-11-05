import '../../pages/login_page/login.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';

const ReservationForm = () => {
  // this componenet renders from two dirction
  // one from "create reservation" and another from "Edit reservation"
  // when it comes from "Edit reservation" it comes up with router state

  const { state } = useLocation();
  let daate, tiime;
  if (state) {
    const reservationDateObject = new Date(state?.reservationDate);
    // we may not have any state, if it it renders for create reservation
    daate = `${reservationDateObject.getFullYear()}-${('0' + (reservationDateObject.getMonth() + 1)).slice(-2)}-${(
      '0' + reservationDateObject.getDate()
    ).slice(-2)}`;
    tiime = `${('0' + reservationDateObject.getHours()).slice(-2)}:${('0' + reservationDateObject.getMinutes()).slice(
      -2
    )}`;
  }

  const [clientName, setClientName] = useState(state ? state.clientName : '');
  const [people, setPeople] = useState(state ? state.people : 0);
  const [contactNumber, setContactNumber] = useState(state ? state.contactNumber : '');
  const [date, setDate] = useState(state ? daate : '');
  const [time, setTime] = useState(state ? tiime : '');
  const [disable, setDisable] = useState(false);
  const authorization = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    fetch(config.apiurl + `/reservation/${state ? state._id : 'create-reservation'}`, {
      method: `${state ? 'PATCH' : 'POST'}`,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
      body: JSON.stringify({
        clientName,
        people,
        reservationDate: new Date(date + ' ' + time),
        contactNumber,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 'success') {
          alert(state ? 'Reservation Updated!' : 'Reservation Created');
          setDisable(false);
          navigate('/home/reservation');
        } else {
          setDisable(false);
          alert(res.message);
        }
      })
      .catch((err) => console.log('error', err));
    setDisable(false);
  };
  return (
    <div className='parent'>
      <div className='form-box reservation-box-size'>
        <h1>{state ? 'Edit Reservation' : 'Reservation Form'}</h1>
        <form onSubmit={handleSubmit}>
          <p>Customer Name</p>
          <input
            type='text'
            name='fname'
            id='name'
            placeholder='Enter Customer Name'
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <p>Number of People</p>
          <input
            type='number'
            name='number'
            id='numberofcustomer'
            placeholder='Enter Number of People'
            required
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          <p>Contact Number</p>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Enter Contact Number'
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <p>Choose Reservation Date</p>
          <input type='date' name='date' id='date' required value={date} onChange={(e) => setDate(e.target.value)} />
          <p>Reservation Time</p>
          <input type='time' name='time' id='time' required value={time} onChange={(e) => setTime(e.target.value)} />
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

export default ReservationForm;
