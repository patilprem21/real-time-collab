import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCmnf8PsTz72VavrjajI9PmsH-x2RymG-s",
  authDomain: "real-time-collab-21.firebaseapp.com",
  projectId: "real-time-collab-21",
  storageBucket: "real-time-collab-21.appspot.com",
  messagingSenderId: "275908301689",
  appId: "1:275908301689:web:60d4ca537749cdf590d5a8",
    measurementId: "G-VKFTLYBRKK"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);