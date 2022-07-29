import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg7OMO_UMLXi9DInuiNDKR7ZPCRtwZ2CU",
  authDomain: "auth-b0c5a.firebaseapp.com",
  projectId: "auth-b0c5a",
  storageBucket: "auth-b0c5a.appspot.com",
  messagingSenderId: "680428002653",
  appId: "1:680428002653:web:433af8e1225120e889dcb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);