import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDavxriCOBylA-2x_DNUGphzfZHbIWVffE',
  authDomain: 'passwordless-7fa18.firebaseapp.com',
  databaseURL: 'https://passwordless-7fa18.firebaseio.com',
  projectId: 'passwordless-7fa18',
  storageBucket: 'passwordless-7fa18.appspot.com',
  messagingSenderId: '248305362916',
  appId: '1:248305362916:android:083263064ca27e17ba49f1',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
