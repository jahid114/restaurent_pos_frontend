const Userlist = () => {
  return (
    <div className='container first'>
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
              Role
            </th>
            <th className='text-center' scope='col'>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='text-center' scope='row'>
              1
            </th>
            <td className='text-center'>Mark</td>
            <td className='text-center'>User</td>
            <td className='text-center'>
              <i className='bi bi-trash icon'></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
