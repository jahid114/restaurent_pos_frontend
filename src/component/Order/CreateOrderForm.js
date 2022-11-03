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
      <div class='mainContent container'>
        <div class='header row'>
          <p>Create Order</p>
        </div>
        <div class='row content'>
          <div class='col-md-6'>
            <div class='row  mr-1'>
              <div class='input-group col-sm-6'>
                <input type='text' class='form-control' placeholder='Search' />
                <div class='input-group-append'>
                  <button class='btn btn-success' type='submit'>
                    Search
                  </button>
                </div>
              </div>
              <div class='dropdown col-sm-6'>
                <button type='button' class='btn btn-success dropdown-toggle' data-toggle='dropdown'>
                  Select
                </button>
                <div class='dropdown-menu'>
                  <a class='dropdown-item' href='#'>
                    Link 1
                  </a>
                  <a class='dropdown-item' href='#'>
                    Link 2
                  </a>
                  <a class='dropdown-item' href='#'>
                    Link 3
                  </a>
                </div>
              </div>
            </div>
            <div class='row mr-1'>
              <table id='order' class='rounded'>
                <tr>
                  <th class='pt-1 pb-1'>ID</th>
                  <th class='pt-1 pb-1'>Name</th>
                  <th class='pt-1 pb-1'>Price</th>
                  <th class='pt-1 pb-1'></th>
                </tr>
                <tr>
                  <td class='pt-1 pb-1'>1</td>
                  <td class='pt-1 pb-1'>Hamburger grande</td>
                  <td class='pt-1 pb-1'>$250</td>
                  <td class='pt-1 pb-1'>
                    <button class='In-order btn'>In Order</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hamburger grande</td>
                  <td>$250</td>
                  <td>
                    <button class='add-order btn'>+</button>
                  </td>
                </tr>
              </table>
            </div>
            <div class='row'>
              <nav aria-label='Pagination' class='pagination-block'>
                <ul class='pagination'>
                  <li class='page-item disabled'>
                    <a class='page-link' href='#' tabindex='-1'>
                      Previous
                    </a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li class='page-item active'>
                    <a class='page-link' href='#'>
                      2 <span class='sr-only'>(current)</span>
                    </a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li class='page-item'>
                    <a class='page-link' href='#'>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class='col-md-6'>
            <div class='row ml-1'>
              <div class='total-board col-sm-12'>
                <h2>Total $1870.00</h2>
                <p>9 Items in Order</p>
              </div>
            </div>
            <div class='row ml-1'>
              <table id='total-list' class='rounded'>
                <tr>
                  <th class='pt-1 pb-1'>Product</th>
                  <th class='pt-1 pb-1'>Units</th>
                  <th class='pt-1 pb-1'></th>
                  <th class='pt-1 pb-1'>Total</th>
                  <th class='pt-1 pb-1'></th>
                </tr>
                <tr>
                  <td class='pt-1 pb-1'>HEINEKEN 750ML</td>
                  <td class='pt-1 pb-1'>3</td>
                  <td class='pt-1 pb-1'>
                    <button class='increase btn'>+</button>
                    <button class='decrease btn bg-danger'>-</button>
                  </td>
                  <td class='pt-1 pb-1'>$450</td>
                  <td class='pt-1 pb-1'>
                    <button>
                      <i class='bi bi-trash' style={{ 'font-size': '1.5rem', color: 'red' }}></i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class='table row'>
              <button class='submit btn mb-2' onClick={handleSubmit}>
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
