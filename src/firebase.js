import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrflXsWUin6uDea5pBaxsu_2QjHLD9ACA",
  authDomain: "linkedin-clone-ae2e5.firebaseapp.com",
  projectId: "linkedin-clone-ae2e5",
  storageBucket: "linkedin-clone-ae2e5.appspot.com",
  messagingSenderId: "874162942455",
  appId: "1:874162942455:web:489dc565da1e7bc4e1fef2",
};

export const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth, serverTimestamp };
