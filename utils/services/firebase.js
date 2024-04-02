// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxSg9ueb_rQbDtWVNn41PDSAM52ZFDHpM",
  authDomain: "tothaim-argazim-shkalim-amen.firebaseapp.com",
  projectId: "tothaim-argazim-shkalim-amen",
  storageBucket: "tothaim-argazim-shkalim-amen.appspot.com",
  messagingSenderId: "904353755237",
  appId: "1:904353755237:web:1a6619c0fa52bb0c7b568c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
