import TitleAndButton from '../TitleAndButton';
import OrderList from './OrderList';

const Order = () => {
  const handleButtonSubmit = () => {};
  return (
    <>
      <TitleAndButton title='Order' buttonName='Create Order' onSubmitButton={handleButtonSubmit} />
      <hr />
      <OrderList />
    </>
  );
};

export default Order;
