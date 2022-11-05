import TitleAndButton from '../TitleAndButton';
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
          <h4>Order info</h4>
        </div>
        <div className='col-md-6' id='Expense-info'>
          <h4>Expense Info</h4>
        </div>
      </div>
      <div className='m-3 ml-4' id='Todays-reservation'>
        <TitleAndButton title='Todays Reservation' buttonName='Show more' onSubmitButton={handleButtonSubmit} />
        <hr />
        <p className='ml-5'>No Reservation for today</p>
      </div>
    </>
  );
};

export default Dashboard;
