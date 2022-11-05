const Item = (prop) => {
  const { id, name, catagory, price, _id, isInOrder, addToOrderedItemList } = prop;

  return (
    <tr>
      <td className='pt-1 pb-1'>{id + 1}</td>
      <td className='pt-1 pb-1'>{name}</td>
      <td className='pt-1 pb-1'>${price}</td>
      <td className='pt-2 pb-2'>
        {isInOrder ? (
          <button className='In-order btn'>In Order</button>
        ) : (
          <button className='add-order btn' onClick={(e) => addToOrderedItemList(_id)}>
            +
          </button>
        )}
      </td>
    </tr>
  );
};

export default Item;
