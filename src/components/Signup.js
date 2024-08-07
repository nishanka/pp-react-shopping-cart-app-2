import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Card from './UI/Card';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
        alert(`signup successful ${email}`);
      })
      .catch((err) => {
        console.log(err);
        alert('Please enter the email and password');
      });
  };

  return (
    <Card className='login' title='Sign Up'>
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
        <button className='btn btn-primary m-3' onClick={signup}>
          Signup
        </button>
      </form>
      <Link to='/'>Back to Home</Link>
    </Card>
  );
};

export default Signup;
