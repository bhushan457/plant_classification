import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCFiiBiocr_fWtR5MnKvF75ZP6SVXtFyPA",
    authDomain: "project-3-fe6fe.firebaseapp.com",
    databaseURL: "https://project-3-fe6fe-default-rtdb.firebaseio.com",
    projectId: "project-3-fe6fe",
    storageBucket: "project-3-fe6fe.appspot.com",
    messagingSenderId: "572783376439",
    appId: "1:572783376439:web:92767ed05a59092eeaa7b2",
    measurementId: "G-JLECSQDT3F"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const analytics = typeof window !== "undefined" && getAnalytics(app);

// const db = getFirestore(app);
const auth = getAuth(app);

export {app ,analytics ,auth}