import TitleAndButton from '../TitleAndButton';
import OrderList from './OrderList';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/createOrder');
  };
  return (
    <>
      <TitleAndButton title='Order' buttonName='Create Order' onSubmitButton={handleButtonSubmit} />
      <hr />
      <OrderList />
    </>
  );
};

export default Order;
