import TitleAndButton from '../TitleAndButton';
import Expenselist from './ExpenseList';

const Expense = () => {
  const handleButtonSubmit = () => {};
  return (
    <>
      <TitleAndButton title='Expense' buttonName='Add Expense' onSubmitButton={handleButtonSubmit} />
      <hr />
      <Expenselist />
    </>
  );
};

export default Expense;
