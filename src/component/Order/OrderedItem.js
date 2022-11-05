const OrderedItem = (prop) => {
  const { name, qty, price, _id, deleteItem, modify } = prop;

  return (
    <tr>
      <td className='pt-1 pb-1'>{name}</td>
      <td className='pt-1 pb-1'>{qty}</td>
      <td className='pt-1 pb-1'>
        <button className='increase btn' onClick={(e) => modify(_id, 1)}>
          +
        </button>
        <button className='decrease btn bg-danger' onClick={(e) => modify(_id, -1)}>
          -
        </button>
      </td>
      <td className='pt-1 pb-1'>{price}</td>
      <td className='pt-1 pb-1'>
        <button className='button' onClick={(e) => deleteItem(_id)}>
          <i className='bi bi-trash' style={{ 'font-size': '1.5rem', color: 'red' }}></i>
        </button>
      </td>
    </tr>
  );
};

export default OrderedItem;
