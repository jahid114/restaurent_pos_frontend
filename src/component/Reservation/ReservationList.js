const Reservationlist = () => {
  return (
    <div className='container first'>
      <table className='table table-bordered'>
        <thead className='table-head'>
          <tr>
            <th className='text-center' scope='col'>
              ID
            </th>
            <th className='text-center' scope='col'>
              Client Name
            </th>
            <th className='text-center' scope='col'>
              Phone no
            </th>
            <th className='text-center' scope='col'>
              Date & Time
            </th>
            <th className='text-center' scope='col'>
              No. of People
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
            <td className='text-center'>Muntachir munim</td>
            <td className='text-center'>01300000000</td>
            <td className='text-center'>
              <p>02-11-2022</p>
              <p>08:00 PM</p>
            </td>
            <td className='text-center'>15</td>
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

export default Reservationlist;
