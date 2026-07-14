import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfsaaXBWsEgiTMFdTHc0gImAPrRqUUNkE",
  authDomain: "pspsps-524f8.firebaseapp.com",
  projectId: "pspsps-524f8",
  storageBucket: "pspsps-524f8.firebasestorage.app",
  messagingSenderId: "708945612766",
  appId: "1:708945612766:web:ce22135f00368aec75574f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;