import TitleAndButton from '../TitleAndButton';
import Userlist from './Userlist';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';

const User = () => {
  const authentication = useAuth();
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/userForm');
  };
  return (
    <>
      <TitleAndButton  title='Manage User' buttonName='Add User' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Userlist />
    </>
  );
};

export default User;
