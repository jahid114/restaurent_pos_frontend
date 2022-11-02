import '../../pages/login_page/login.css';
import { useNavigate } from 'react-router-dom';

const ReservationForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home/reservation');
  };
  return (
    <div className='parent'>
      <div className='form-box reservation-box-size'>
        <h1>Reservation Form</h1>
        <form onSubmit={handleSubmit}>
          <p>Customer Name</p>
          <input type='text' name='fname' id='name' placeholder='Enter Customer Name' required />
          <p>Number of customer</p>
          <input type='number' name='number' id='numberofcustomer' placeholder='Enter Number of Customer' required />
          <p>Contact Number</p>
          <input type='tel' name='phone' id='phone' placeholder='Enter Contact Number' required />
          <p>Choose Reservation Date</p>
          <input type='date' name='date' id='date' required />
          <p>Reservation Time</p>
          <input type='time' name='time' id='time' required />
          <input type='submit' name='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
