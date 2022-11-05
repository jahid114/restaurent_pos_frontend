import TitleAndButton from '../TitleAndButton';
import TodaysReservationlist from './TodaysReservation';
import OrderInfoDetails from './OrderInfoDetails';
import ExpenseInfoDetails from './ExpenseInfoDetails';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/reservation');
  };
  return (
    <>
      <div className='title'>Dashboard</div>
      <div className='info d-flex flex-row justify-content-around pl-3 pr-2'>
        <div className='col-md-6' id='Sales-info'>
          <h4 className='mt-2 ml-2'>Order info</h4>
          <hr />
          <OrderInfoDetails />
        </div>
        <div className='col-md-6' id='Expense-info'>
          <h4 className='mt-2 ml-2'>Expense Info</h4>
          <hr />
          <ExpenseInfoDetails />
        </div>
      </div>
      <div className='m-3 ml-4' id='Todays-reservation'>
        <TitleAndButton title='Todays Reservation' buttonName='Show more' onSubmitButton={handleButtonSubmit} />
        <hr />
        <TodaysReservationlist />
      </div>
    </>
  );
};

export default Dashboard;
