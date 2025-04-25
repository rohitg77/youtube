import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB9vKN0endtrcDlBKre-s4Jz1X8wNfHAAk",
  authDomain: "video-394cb.firebaseapp.com",
  projectId: "video-394cb",
  storageBucket: "video-394cb.appspot.com",
  messagingSenderId: "1065446388083",
  appId: "1:1065446388083:web:17b5b429d8c440c82b1506"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;