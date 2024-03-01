import React, { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

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
    <div>
      <form>
        <h1>Sign Up</h1>
        <input
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-danger' onClick={signup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
