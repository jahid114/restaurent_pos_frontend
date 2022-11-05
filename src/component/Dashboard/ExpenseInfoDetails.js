/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';

const ExpenseInfoDetails = () => {
  const [monthlyExpense, setMonthlyExpense] = useState('');
  const [todaysExpense, setTodaysExpense] = useState('');
  const authorization = useAuth();

  useEffect(() => {
    fetch(config.apiurl + '/expense/todays-expense', {
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTodaysExpense(res.data.todaysExpense.reduce((total, expense) => total + expense.price, 0));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(config.apiurl + '/expense/this-months-expense', {
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMonthlyExpense(res.data.thisMonthsExpense.reduce((total, expense) => total + expense.price, 0));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <p>
        Monthly Expense: <b>{monthlyExpense}</b>
      </p>
      <p>
        Todays Expense: <b>{todaysExpense}</b>
      </p>
    </div>
  );
};

export default ExpenseInfoDetails;
