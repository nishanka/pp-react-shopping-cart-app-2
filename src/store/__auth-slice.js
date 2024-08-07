import { createSlice } from '@reduxjs/toolkit';
import { auth } from './firebase';

const authSlice = createSlice({
  name: 'auth',
  userData: {
    uid: auth.currentUser.uid,
    email: auth.currentUser.email,
    displayName: auth.currentUser.displayName,
    phoneNumber: auth.currentUser.phoneNumber,
    photoURL: auth.currentUser.photoURL,
  },
});

const setUserData = (userId, userEmail) => {
  localStorage.setItem('userId', JSON.stringify(auth.currentUser.uid));
  localStorage.setItem('userEmail', JSON.stringify(auth.currentUser.email));
};

export const authActions = authSlice.actions; // export all the actions

export default authSlice;
