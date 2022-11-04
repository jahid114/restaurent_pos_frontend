/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import config from '../../config';
import useAuth from '../../hooks/UseAuth';
import User from './user';

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const [deleted, setDeleted] = useState('random');
  const authorization = useAuth();
  useEffect(() => {
    fetch(config.apiurl + '/users', {
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authorization.auth.token,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setUsers(resp.data.users);
      });
  }, [deleted]);
  return (
    <div className='container first'>
      {!users.length ? (
        'Loading Users'
      ) : (
        <table className='table table-bordered'>
          <thead className='table-head'>
            <tr>
              <th className='text-center' scope='col'>
                #
              </th>
              <th className='text-center' scope='col'>
                Name
              </th>
              <th className='text-center' scope='col'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, indx) => (
              <User
                key={user._id}
                id={indx}
                name={user.name}
                _id={user._id}
                setDeleted={setDeleted}
                deleted={deleted}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Userlist;
