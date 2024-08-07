import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Card from './UI/Card';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        const userDetails = { email };
        localStorage.setItem('userData', JSON.stringify(userDetails));

        console.log(useCredential);

        navigate('/products');

        console.log(`signin successful ${email}`);
      })
      .catch((err) => {
        console.log(err);
        alert('Account doesnot exist, please create an account');
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
        <button className='btn btn-primary m-3' onClick={signin}>
          Login
        </button>
      </form>
      <Link to='/'>Back to Home</Link>
    </Card>
  );
};

export default Signin;
