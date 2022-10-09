// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDLibewxZ5hu0-M612Co7DCzj4Ov-koyNE",
	authDomain: "lacandelacoder.firebaseapp.com",
	projectId: "lacandelacoder",
	storageBucket: "lacandelacoder.appspot.com",
	messagingSenderId: "88998223804",
	appId: "1:88998223804:web:27422599056a8d0b8155b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
