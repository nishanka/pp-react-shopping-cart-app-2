// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC18LecS3eOGgX7Qah8mnA0ECFavmPztCU',
  authDomain: 'pp-react-shopping-cart-app-1.firebaseapp.com',
  databaseURL:
    'https://pp-react-shopping-cart-app-1-default-rtdb.firebaseio.com',
  projectId: 'pp-react-shopping-cart-app-1',
  storageBucket: 'pp-react-shopping-cart-app-1.appspot.com',
  messagingSenderId: '207364951941',
  appId: '1:207364951941:web:de091ed0cf0d0784bebeec',
  measurementId: 'G-31BPYWRECF',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
