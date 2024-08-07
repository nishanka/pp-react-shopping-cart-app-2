import React from 'react';
import NavBar from './NavBar';
import classes from './styles/Payment.module.css';

const Payment = () => {
  return (
    <>
      <NavBar />
      <div
        className={`${classes['order-success']} alert alert-success mx-auto mt-3 d-flex flex-column justify-content-center align-items-center`}
      >
        <h2 className='m-0'>Order Success!</h2>
      </div>
    </>
  );
};

export default Payment;
