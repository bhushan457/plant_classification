// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);