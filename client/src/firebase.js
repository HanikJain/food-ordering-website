import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID 
// }

const firebaseConfig = {
    apiKey: "AIzaSyA3BpOqMtMDbfrMZ59iqWRZgaYOcHkHUlA",
    authDomain: "react-http-f4a5a.firebaseapp.com",
    databaseURL: "https://react-http-f4a5a-default-rtdb.firebaseio.com",
    projectId: "react-http-f4a5a",
    storageBucket: "react-http-f4a5a.appspot.com",
    messagingSenderId: "774478787617",
    appId: "1:774478787617:web:1f5a95ca2d8074fc251f60"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;