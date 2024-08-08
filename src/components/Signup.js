import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Card from './UI/Card';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        // console.log(useCredential);
        // alert(`signup successful ${email}`);
        setMessage('Success! Please log using your credentials.');
      })
      .catch((err) => {
        // console.log(err);
        switch (err.code) {
          case 'auth/email-already-in-use':
            // alert('Email already in use !');
            setErrorMsg('Email already in use!');
            break;
          case 'auth/invalid-email':
            setErrorMsg('Please enter a valid email');
            break;
          case 'auth/missing-password':
            setErrorMsg('Password is missing!');
            break;
          case 'auth/weak-password':
            setErrorMsg('Please enter a Strong Password');
            break;
          default:
            // alert('Please enter the email and password');
            setErrorMsg('Please enter a valid email and password');
        }
      });
  };

  let content;
  if (message !== '') {
    content = (
      <div className='success'>
        <div className='message text-warning'>{message}</div>
        <button
          className='btn btn-primary m-3'
          onClick={() => navigate('/signin')}
        >
          Log Now
        </button>
      </div>
    );
  } else {
    content = (
      <>
        <form>
          <input
            className='form-control mb-2'
            type='email'
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='form-control mb-2'
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMsg && <p className='text-danger mb-0 fw-bold'>{errorMsg}</p>}
          <button className='btn btn-primary m-3' onClick={signup}>
            Signup
          </button>
        </form>
        <Link to='/'>Back to Home</Link>
      </>
    );
  }

  return (
    <Card className='login' title='Sign Up'>
      {content}
    </Card>
  );
};

export default Signup;
