const index = () => {
  return (
    <>
      <div className='title'>Dashboard</div>
      <div className='info row'>
        <div className='col-sm-2' id='Sales-info'>
          <h4>Sales info</h4>
        </div>
        <div className='col-sm-2' id='Expense-info'>
          <h4>Expense Info</h4>
        </div>
        <div className='col-sm-2' id='Order-info'>
          <h4>Order Info</h4>
        </div>
        <div className='col-sm-2' id='Todays-reservation'>
          <h4>Todays Reservation</h4>
        </div>
      </div>
    </>
  );
};

export default index;
