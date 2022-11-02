import TitleAndButton from '../TitleAndButton';
import Userlist from './Userlist';
import { useNavigate } from 'react-router-dom';
const User = () => {
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/userForm');
    console.log('Add user button clicked');
  };
  return (
    <>
      <TitleAndButton title='Manage User' buttonName='Add User' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Userlist />
    </>
  );
};

export default User;
