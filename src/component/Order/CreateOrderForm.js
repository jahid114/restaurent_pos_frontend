/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../pages/login_page/login.css';
import './formStyle.css';
import { useNavigate } from 'react-router-dom';

const CreateOrderForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home/orders');
  };
  return (
    <div className='parent'>
      <div className='mainContent container'>
        <div className='head row'>
          <p>Create Order</p>
        </div>
        <div className='row content mt-9'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='input-group col-sm-6 ml-n3'>
                <input type='text' className='form-control' placeholder='Search' />
                <div className='input-group-append'>
                  <button className='btn btn-dark' type='submit'>
                    Search
                  </button>
                </div>
              </div>
              <div className='dropdown col-sm-6'>
                <button type='button' className='btn btn-dark dropdown-toggle select-option' data-toggle='dropdown'>
                  Select Catagory
                </button>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='#'>
                    Link 1
                  </a>
                  <a className='dropdown-item' href='#'>
                    Link 2
                  </a>
                  <a className='dropdown-item' href='#'>
                    Link 3
                  </a>
                </div>
              </div>
            </div>
            <div className='row mr-1'>
              <table id='order' className='rounded'>
                <tr>
                  <th className='pt-1 pb-1'>ID</th>
                  <th className='pt-1 pb-1'>Name</th>
                  <th className='pt-1 pb-1'>Price</th>
                  <th className='pt-1 pb-1'></th>
                </tr>
                <tr>
                  <td className='pt-1 pb-1'>1</td>
                  <td className='pt-1 pb-1'>Hamburger grande</td>
                  <td className='pt-1 pb-1'>$250</td>
                  <td className='pt-2 pb-2'>
                    <button className='In-order btn'>In Order</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hamburger grande</td>
                  <td>$250</td>
                  <td className='pt-2 pb-2'>
                    <button className='add-order btn'>+</button>
                  </td>
                </tr>
              </table>
            </div>
            <div className='row'>
              <nav aria-label='Pagination' className='pagination-block'>
                <ul className='pagination'>
                  <li className='page-item disabled'>
                    <a className='page-link' href='#' tabindex='-1'>
                      Previous
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item active'>
                    <a className='page-link' href='#'>
                      2 <span className='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row ml-1'>
              <div className='total-board col-sm-12'>
                <h2>Total $1870.00</h2>
                <p>9 Items in Order</p>
              </div>
            </div>
            <div className='row ml-1'>
              <table id='total-list' class='rounded'>
                <tr>
                  <th className='pt-1 pb-1'>Product</th>
                  <th className='pt-1 pb-1'>Units</th>
                  <th className='pt-1 pb-1'></th>
                  <th className='pt-1 pb-1'>Total</th>
                  <th className='pt-1 pb-1'></th>
                </tr>
                <tr>
                  <td className='pt-1 pb-1'>HEINEKEN 750ML</td>
                  <td className='pt-1 pb-1'>3</td>
                  <td className='pt-1 pb-1'>
                    <button className='increase btn'>+</button>
                    <button className='decrease btn bg-danger'>-</button>
                  </td>
                  <td className='pt-1 pb-1'>$450</td>
                  <td className='pt-1 pb-1'>
                    <button className='button'>
                      <i className='bi bi-trash' style={{ 'font-size': '1.5rem', color: 'red' }}></i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div className='table row'>
              <button className='submit btn button-color mb-2' onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderForm;
