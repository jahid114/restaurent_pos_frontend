/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';

const OrderInfoDetails = () => {
  const [totalOrder, setTotalOrder] = useState('');
  const [todaysOrder, setTodaysOrder] = useState('');
  const [monthlyOrder, setMonthlyOrder] = useState('');
  const [totalSale, setTotalSale] = useState('');
  const [todaysSale, setTodaysSale] = useState('');
  const [monthlySale, setMonthlySale] = useState('');
  const authorization = useAuth();

  useEffect(() => {
    fetch(config.apiurl + '/orders', {
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTotalOrder(res.results);
        setTotalSale(res.data.orders.reduce((total, order) => total + order.totalPrice, 0));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(config.apiurl + '/orders/this-months-order', {
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMonthlyOrder(res.results);
        setMonthlySale(res.data.thisMonthsOrder.reduce((total, order) => total + order.totalPrice, 0));
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(config.apiurl + '/orders/todays-order', {
      headers: {
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTodaysOrder(res.results);
        setTodaysSale(res.data?.todaysOrder?.reduce((total, order) => total + order.totalPrice, 0));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='d-flex flex-row justify-content-between'>
        <div>
          <p>
            Total Order: <b>{totalOrder}</b>
          </p>
          <p>
            Total Sale: <b>{totalSale}</b>
          </p>
        </div>
        <div>
          <p>
            This Months Order: <b>{monthlyOrder}</b>{' '}
          </p>
          <p>
            This Months Sale: <b>{monthlySale}</b>{' '}
          </p>
        </div>
      </div>
      <div>
        <p>
          Todays Order: <b>{todaysOrder}</b>
        </p>
        <p>
          Todays Sale: <b>{todaysSale}</b>
        </p>
      </div>
    </>
  );
};

export default OrderInfoDetails;
