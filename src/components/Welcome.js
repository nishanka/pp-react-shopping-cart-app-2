import React, { useEffect, useState } from 'react';
import Card from './UI/Card';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const userDataStorage = localStorage.getItem('userData');

    if (userDataStorage) {
      const currentUserData = JSON.parse(userDataStorage);
      const currentUserEmail = currentUserData['email'];
      // console.log('currentUserEmail', currentUserEmail);
      setUserEmail(currentUserEmail);
      // if (currentUserEmail !== null) {
      //   setUserEmail(currentUserEmail);
      // }
    }
  }, []);

  let welcomeText = 'Welcome!';
  if (userEmail) {
    let userName = userEmail.substr(0, userEmail.indexOf('@'));
    welcomeText = 'Welcome ' + userName + '!';
  }

  return (
    <Card className='welcome' title={welcomeText}>
      <div className='links d-flex justify-content-center'>
        {!userEmail && (
          <>
            <button
              className='btn btn-primary m-2'
              onClick={() => navigate('/Signin')}
            >
              Already have a Login
            </button>
            <button
              className='btn btn-warning m-2'
              onClick={() => navigate('/Signup')}
            >
              Create a Login
            </button>
          </>
        )}
      </div>
      {userEmail && (
        <button
          className='btn btn-info m-2'
          onClick={() => navigate('/products')}
        >
          View Products
        </button>
      )}
    </Card>
  );
};

export default Welcome;
