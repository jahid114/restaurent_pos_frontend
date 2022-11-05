import { useEffect, useState } from 'react';
import useAuth from '../../hooks/UseAuth';
import config from '../../config';
import Order from './Order';

const Orderlist = () => {
  const authorization = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(config.apiurl + '/orders', {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setOrders(resp.data.orders);
        console.log(resp.data.orders);
      });
  }, []);

  return (
    <div className='container first'>
      <table className='table table-bordered'>
        <thead className='table-head'>
          <tr>
            <th className='text-center' scope='col'>
              #
            </th>
            <th className='text-center' scope='col'>
              Item info
            </th>
            <th className='text-center' scope='col'>
              Date
            </th>
            <th className='text-center' scope='col'>
              Status
            </th>
            <th className='text-center' scope='col'>
              Total Price
            </th>
            {/* <th className='text-center' scope='col'>
              Edit
            </th>
            <th className='text-center' scope='col'>
              Delete
            </th> */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order, indx) => (
            <Order
              // status={order.status}
              items={order.items}
              totalPrice={order.totalPrice}
              _id={order._id}
              date={new Date(order.orderCreatedAt).toDateString()}
              id={indx}
            />
            // id, status, totalPrice, _id, date, items
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orderlist;
