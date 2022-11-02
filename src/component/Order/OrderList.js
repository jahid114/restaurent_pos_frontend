const Orderlist = () => {
  return (
    <div className='container first'>
      <table className='table table-bordered'>
        <thead className='table-head'>
          <tr>
            <th className='text-center' scope='col'>
              ID
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
            <td className='text-center'>
              <i>Fish x 2</i>
              <br />
              <i>Meat x 3</i>
              <br />
              <i>Rice x 2</i>
              <br />
            </td>
            <td className='text-center'>02-11-2022</td>
            <td className='text-center'>paid</td>
            <td className='text-center'>1500</td>
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

export default Orderlist;
