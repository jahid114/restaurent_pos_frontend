const user = (prop) => {
  return (
    <tr>
        <th className='text-center' scope='row'>
            {prop.id + 1}
        </th>
        <td className='text-center'>{prop.name}</td>
        <td className='text-center'>
            <i className='bi bi-trash icon'></i>
        </td>
    </tr>   
    );
};

export default user;
