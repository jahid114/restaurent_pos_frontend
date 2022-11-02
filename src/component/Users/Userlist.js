import { useEffect, useState } from "react";
import config from "../../config";
import useAuth from "../../hooks/UseAuth";
import User from "./user"

const Userlist = () => {
  const [users, setUsers] = useState([]);
  const authorization = useAuth();
  useEffect(() => {
    console.log("token", authorization.auth.token)

    fetch(config.apiurl + "/users", {
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' +  authorization.auth.token
      } 
    }
    )
    .then(resp => resp.json())
    .then(resp => {
      setUsers(resp.data.users);
    })
  }, [])
  return (
    <div className='container first'>
      {!users.length ? "Loading Users": 
      <table className='table table-bordered'>
        <thead className='table-head'>
          <tr>
            <th className='text-center' scope='col'>
              ID
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
              id={indx}
              name={user.name}
            />
          ))}
        </tbody>
      </table>
  }
    </div>
  );
};

export default Userlist;
