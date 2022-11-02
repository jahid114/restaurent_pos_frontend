import TitleAndButton from '../TitleAndButton';
import Reservationlist from './ReservationList';

const Reservation = () => {
  const handleButtonSubmit = () => {};
  return (
    <>
      <TitleAndButton title='Reservation' buttonName='Take Reservation' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Reservationlist />
    </>
  );
};

export default Reservation;
