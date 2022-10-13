
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC7S0hyzYi2aggyboDoyyL0r1xlkrecbyI",
  authDomain: "react-netflix-clone-5bde8.firebaseapp.com",
  projectId: "react-netflix-clone-5bde8",
  storageBucket: "react-netflix-clone-5bde8.appspot.com",
  messagingSenderId: "201998058560",
  appId: "1:201998058560:web:6ba61c398681534c44cba5",
  measurementId: "G-EDHGQ46CJM"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
