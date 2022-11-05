const Order = (prop) => {
  const { id, status, totalPrice, _id, date, items } = prop;

  console.log(items);

  return (
    <>
      {!items.length ? (
        'Loading'
      ) : (
        <tr>
          <th className='text-center' scope='row'>
            {id + 1}
          </th>
          <td className='text-center'>
            {items.map((item) => (
              <>
                <i>
                  {item?.item?.name} x {item.quantity}
                </i>
                <br />
              </>
            ))}
          </td>
          <td className='text-center'>{date}</td>
          <td className='text-center'>
            <p>{status}</p>
            <button className='btn button-color'>Print Bill</button>
          </td>
          <td className='text-center'>{totalPrice}</td>
          {/* <td className='text-center'>
            <i class='bi bi-pencil-square icon' style={{ color: '#594F8D' }}></i>
          </td>
          <td className='text-center'>
            <i className='bi bi-trash icon'></i>
          </td> */}
        </tr>
      )}
    </>
  );
};

export default Order;
