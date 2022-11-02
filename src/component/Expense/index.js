import TitleAndButton from '../TitleAndButton';
import Expenselist from './ExpenseList';
import { useNavigate } from 'react-router-dom';

const Expense = () => {
  const navigate = useNavigate();
  const handleButtonSubmit = () => {
    navigate('/home/expenseForm');
  };
  return (
    <>
      <TitleAndButton title='Expense' buttonName='Add Expense' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Expenselist />
    </>
  );
};

export default Expense;
