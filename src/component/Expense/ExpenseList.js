// some css classes are from bootstrap and others are from home.css
const Expenselist = () => {
  return (
    <div className='container first'>
      <table className='table table-bordered'>
        <thead className='table-head'>
          <tr>
            <th className='text-center' scope='col'>
              ID
            </th>
            <th className='text-center' scope='col'>
              Category
            </th>
            <th className='text-center' scope='col'>
              Description
            </th>
            <th className='text-center' scope='col'>
              Expense
            </th>
            <th className='text-center' scope='col'>
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className='text-center' scope='row'>
              1
            </th>
            <td className='text-center'>shopping</td>
            <td className='text-center'>Bought a table for the restaurent</td>
            <td className='text-center'>5000</td>
            <td className='text-center'>20-10-2022</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Expenselist;
