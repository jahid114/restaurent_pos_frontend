import { useState } from "react";
import config from "../../config";
import useAuth from "../../hooks/UseAuth";
const User = (prop) => {
    const { id, name, _id, setDeleted } = prop;
    const [disable, setDisable] = useState(false)
    const authorization = useAuth();
    const handleDelete = () => {
        setDisable(true);
        fetch(config.apiurl + "/users/" + _id, {
            method: "DELETE",
            headers: {
              'Authorization': 'Bearer ' +  authorization.auth.token
            }
          })
          .then(res => {
            if(res.status === 204) {
                // update the users list
                setDeleted(_id);
                setDisable(false);
            }
          })
          .catch(err => console.log("error", err));
    }


  return (
    <tr>
        <th className='text-center' scope='row'>
            {id + 1}
        </th>
        <td className='text-center'>{name}</td>
        <td className='text-center'>
            <button disabled={disable} onClick={handleDelete}>
                <i className='bi bi-trash icon'></i>
            </button>
            <li>{_id}</li>
        </td>
    </tr>   
    );
};

export default User;
