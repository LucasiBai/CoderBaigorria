// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	collection,
	doc,
	getFirestore,
	query,
	where,
	getDocs,
} from "firebase/firestore";
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

const getProducts = async (hookCallback) => {
	const resQuery = collection(firestore, "productos");
	const resDocs = await getDocs(resQuery);

	hookCallback(resDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
};
const getFilterProducts = async (hookCallback, category) => {
	const resQuery = query(
		collection(firestore, "productos"),
		where("category", "==", category),
	);
	const resDocs = await getDocs(resQuery);

	hookCallback(resDocs.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
};
const getProduct = async (hookCallback, productId) => {
	const resQuery = doc(firestore, "productos", productId);
	const resDoc = await getDocs(resQuery);
	hookCallback({ id: resDoc.id, ...resDoc.data() });
};

export { firestore, getProduct, getFilterProducts, getProducts };
