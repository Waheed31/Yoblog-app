// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuqUeyz2bAVqcmsIkIoSZlNFO1i8Eo9uI",
  authDomain: "blog-c9db9.firebaseapp.com",
  projectId: "blog-c9db9",
  storageBucket: "blog-c9db9.appspot.com",
  messagingSenderId: "228823244169",
  appId: "1:228823244169:web:1fedbcda94817160335558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();