import TitleAndButton from '../TitleAndButton';
import { useNavigate } from 'react-router-dom';
import Itemlist from './ItemList';

const Item = () => {
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/itemForm');
  };
  return (
    <>
      <TitleAndButton title='Item' buttonName='Add Item' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Itemlist />
    </>
  );
};

export default Item;
