import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import classes from './styles/NavBar.module.css';

const NavBar = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart);

  // const auth = getAuth();
  // signOut(auth)
  //   .then(() => {
  //     console.log('User signed out successfully.');
  //   })
  //   .catch((error) => {
  //     console.log('User signed out error!', error);
  //   });
  const userData = JSON.parse(localStorage.getItem('userData'));
  const user = userData['email'];

  let isLoggedIn = false;

  if (user !== undefined) {
    isLoggedIn = true;
  } else {
    isLoggedIn = false;
  }

  const loginLogoutHandler = () => {};

  return (
    <nav className='navbar navbar-expand'>
      <div className='container-fluid'>
        <a
          className={`navbar-brand ${classes.logo}`}
          href='/'
          alt='Shopping Cart'
        >
          <img src='logo.png' alt="Let's Do Shopping" />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/products'>
                Products
              </Link>
            </li>
          </ul>
        </div>
        {/* {user.email && (
          <div className='text-center me-2'>
            <p className='m-0'>You logged in as</p>
            <p className='m-0'>{user.email}</p>
          </div>
        )} */}
        <button
          className={`btn btn-secondary me-2`}
          onClick={() => navigate('/cart')}
        >
          Cart:{' '}
          <span className='badge text-bg-info'>{items.totalQuantity}</span>{' '}
          Items
        </button>
        {user && (
          <div className={`${classes.user}`}>
            <div className={`${classes['user-image']}`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 -960 960 960'
                width='24'
              >
                <path d='M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z' />
              </svg>
            </div>

            <div className={`${classes['user-details']}`}>
              <div
                className={`${classes['user-details-inner']} border border-2 rounded border-primary bg-light p-4 mx-auto`}
              >
                <p>
                  You logged in as{' '}
                  <span className={`${classes['user-name']} text-info fw-bold`}>
                    {user}
                  </span>
                </p>
                <button
                  className={`btn btn-primary ${classes['user-action']}`}
                  onClick={loginLogoutHandler}
                >
                  {isLoggedIn ? 'Logout' : 'Login'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
