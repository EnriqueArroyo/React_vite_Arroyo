import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhouse-react-ed256.firebaseapp.com",
  projectId: "coderhouse-react-ed256",
  storageBucket: "coderhouse-react-ed256.appspot.com",
  messagingSenderId: "257583471184",
  appId: "1:257583471184:web:2fa71ab00aa6c1856d8f55",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
