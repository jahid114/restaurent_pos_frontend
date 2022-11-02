import TitleAndButton from '../TitleAndButton';
import Reservationlist from './ReservationList';
import { useNavigate } from 'react-router-dom';

const Reservation = () => {
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/reservationForm');
  };
  return (
    <>
      <TitleAndButton title='Reservation' buttonName='Take Reservation' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Reservationlist />
    </>
  );
};

export default Reservation;
