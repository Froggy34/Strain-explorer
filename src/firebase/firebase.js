import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEtE4kq8SvQ-a5ixj_cTScMeXJJmktBf8",
  authDomain: "strain-explorer-8b906.firebaseapp.com",
  projectId: "strain-explorer-8b906",
  storageBucket: "strain-explorer-8b906.firebasestorage.app",
  messagingSenderId: "692804026923",
  appId: "1:692804026923:web:6f46aab5398c154e21206e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
