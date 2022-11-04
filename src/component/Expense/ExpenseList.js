/* eslint-disable react-hooks/exhaustive-deps */
import config from '../../config';
import useAuth from '../../hooks/UseAuth';
import { useState, useEffect } from 'react';

const Expenselist = () => {
  const [expenses, setExpenses] = useState([]);
  const authorization = useAuth();
  useEffect(() => {
    fetch(config.apiurl + '/expense', {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setExpenses(resp.data.expenses);
      });
  }, []);
  return (
    <div className='container first'>
      {!expenses.length ? (
        <p>Loading Expense . . .</p>
      ) : (
        <table className='table table-bordered'>
          <thead className='table-head'>
            <tr>
              <th className='text-center' scope='col'>
                #
              </th>
              <th className='text-center' scope='col'>
                Category
              </th>
              <th className='text-center' scope='col'>
                Description
              </th>
              <th className='text-center' scope='col'>
                Expense
              </th>
              <th className='text-center' scope='col'>
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, id) => (
              <tr>
                <th className='text-center' scope='row'>
                  {id + 1}
                </th>
                <td className='text-center'>{expense.category}</td>
                <td className='text-center'>{expense.description}</td>
                <td className='text-center'>{expense.price}</td>
                <td className='text-center'>{new Date(expense.date).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Expenselist;
