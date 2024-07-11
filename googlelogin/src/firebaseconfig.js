
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyAxxVY7_uj8gzxUpiNMIiC3wT2rmTJdFJQ",
  authDomain: "loginauthentication-4c8f4.firebaseapp.com",
  projectId: "loginauthentication-4c8f4",
  storageBucket: "loginauthentication-4c8f4.appspot.com",
  messagingSenderId: "661822940010",
  appId: "1:661822940010:web:158f04824768005e4ebb13"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
