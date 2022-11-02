const Itemlist = () => {
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
              Category
            </th>
            <th className='text-center' scope='col'>
              Price
            </th>
            <th className='text-center' scope='col'>
              Edit
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
            <td className='text-center'>Chicken chap</td>
            <td className='text-center'>Bengali</td>
            <td className='text-center'>150</td>
            <td className='text-center'>
              <i class='bi bi-pencil-square icon' style={{ color: '#594F8D' }}></i>
            </td>
            <td className='text-center'>
              <i className='bi bi-trash icon'></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Itemlist;
