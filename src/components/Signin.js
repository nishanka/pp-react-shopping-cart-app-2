import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Card from './UI/Card';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        const userDetails = { email };
        localStorage.setItem('userData', JSON.stringify(userDetails));
        // console.log(useCredential);
        navigate('/products');
      })
      .catch((err) => {
        // console.log(err);
        // alert('Account doesnot exist, please create an account');
        switch (err.code) {
          case 'auth/invalid-credential':
            // alert('Email already in use !');
            setErrorMsg('Sorry! Your credentials are Invalid.');
            break;
          case 'auth/invalid-email':
            setErrorMsg('Please enter a valid email');
            break;
          case 'auth/missing-password':
            setErrorMsg('Password is missing!');
            break;
          case 'auth/too-many-requests':
            setErrorMsg(
              'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'
            );
            break;
          default:
            // alert('Please enter the email and password');
            setErrorMsg('Please enter a valid email and password');
        }
      });
  };

  return (
    <Card className='login' title='Sign In'>
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
        <button className='btn btn-primary m-3' onClick={signin}>
          Login
        </button>
      </form>
      <Link to='/'>Back to Home</Link>
    </Card>
  );
};

export default Signin;
