// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	collection,
	doc,
	getFirestore,
	query,
	where,
	getDocs,
	getDoc,
	addDoc,
	updateDoc,
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

const products = [
	{
		id: 1,
		title: "Spot Embutir Movil Pvc ",
		description: "Malig carcinoid tumors of the appendix, lg int, and rectum",
		price: 5061.45,
		img: "https://http2.mlstatic.com/D_NQ_NP_647304-MLA48870225809_012022-O.webp",
		stock: 5,
		category: "hogar",
	},
	{
		id: 2,
		title: "Lampara Colgante Vintage",
		description:
			"Occupational exposure to extreme temperature asdsadsadfasmfñlsamfpsafmsañlfmsañlfmasñfsamfñlasmfsañlfmasñlfmsañfsamfñlamfñlmasñlfsamñlfsamfasñlasfmñl",
		price: 7480.83,
		img: "https://http2.mlstatic.com/D_NQ_NP_887880-MLA49215970688_022022-O.webp",
		stock: 12,
		category: "jardin",
	},
	{
		id: 3,
		title: "Lampara Colgante Diamante",
		description: "Water transport accident involving military watercraft",
		price: 7208.2,
		img: "https://http2.mlstatic.com/D_NQ_NP_662815-MLA32618384530_102019-W.webp",
		stock: 5,
		category: "hogar",
	},
	{
		id: 4,
		title: "Combo 2 Lamparas Colgantes Mini Jaula",
		description: "Disp fx of low epiphy (separation) of r femr, 7thJ",
		price: 7477.58,
		img: "https://http2.mlstatic.com/D_NQ_NP_991919-MLA32814396286_112019-O.webp",
		stock: 16,
		category: "habitacion",
	},
	{
		id: 5,
		title: "Velador Luna Llena Impreso 3d Eco",
		description: "Excessive weight gain in pregnancy, first trimester",
		price: 6479.02,
		img: "https://http2.mlstatic.com/D_NQ_NP_720693-MLA50184297436_062022-O.webp",
		stock: 7,
		category: "habitacion",
	},
	{
		id: 6,
		title: "Pack X 4 Spot Aplique Empotrable Piso Alto Transito",
		description: "Unspecified fracture of right ischium, sequela",
		price: 4125.09,
		img: "https://http2.mlstatic.com/D_NQ_NP_901496-MLA50264890144_062022-W.webp",
		stock: 5,
		category: "jardin",
	},
	{
		id: 7,
		title: "Lampara Colgante Vintage Pantalla",
		description: "Subluxation of unsp parts of unspecified shoulder girdle",
		price: 9112.5,
		img: "https://http2.mlstatic.com/D_NQ_NP_887880-MLA49215970688_022022-W.webp",
		stock: 9,
		category: "jardin",
	},
	{
		id: 8,
		title: "Spot Cabezal Ar111 Tacho Con Aro Y Conector Gu10",
		description: "Nondisp midcervical fx l femr, 7thJ",
		price: 9477.2,
		img: "https://http2.mlstatic.com/D_NQ_NP_846639-MLA49041116784_022022-O.webp",
		stock: 2,
		category: "jardin",
	},
	{
		id: 9,
		title: "Farol Exterior",
		description: "Other specified sprain of right wrist, sequela",
		price: 3391.06,
		img: "https://http2.mlstatic.com/D_NQ_NP_707804-MLA31351091874_072019-O.webphttps://http2.mlstatic.com/D_NQ_NP_707804-MLA31351091874_072019-O.webp",
		stock: 18,
		category: "jardin",
	},
	{
		id: 10,
		title: "Spot Aplicar Monovolumen Movil",
		description: "Burn of unsp deg mult sites of unsp wrist and hand, sequela",
		price: 5565.07,
		img: "https://http2.mlstatic.com/D_NQ_NP_778015-MLA31725829695_082019-O.webp",
		stock: 5,
		category: "habitacion",
	},
	{
		id: 11,
		title: "Spot Cabezal Ar111 Tacho Con Aro Y Conector Gu10",
		description: "Nondisp midcervical fx l femr, 7thJ",
		price: 9477.2,
		img: "https://http2.mlstatic.com/D_NQ_NP_846639-MLA49041116784_022022-O.webp",
		stock: 2,
		category: "jardin",
	},
	{
		id: 12,
		title: "Lampara Colgante Diamante",
		description: "Water transport accident involving military watercraft",
		price: 7208.2,
		img: "https://http2.mlstatic.com/D_NQ_NP_662815-MLA32618384530_102019-W.webp",
		stock: 5,
		category: "hogar",
	},
];

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Métodos GET

const getProducts = async () => {
	const resQuery = collection(firestore, "products");
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};
const getFilterProducts = async (category) => {
	const resQuery = query(
		collection(firestore, "products"),
		where("category", "==", category),
	);
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};
const getProduct = async (productId) => {
	const resQuery = doc(firestore, "products", productId);
	const snapshot = await getDoc(resQuery);

	const data = { id: snapshot.id, ...snapshot.data() };
	if (!data.title) {
		return "El producto solicitado no existe.";
	}
	return data;
};

const getFavouriteProducts = async () => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const itemListSnapshot = await getDoc(refQuery);

	const itemListData = [];

	for (const itemId of itemListSnapshot.data().itemsId) {
		const item = await getProduct(itemId);
		itemListData.push(item);
	}

	return itemListData;
};

const getOffers = async () => {
	const refQuery = doc(firestore, "offers", "uwNNETD5z3M4OJ9Jw20q");
	const itemListSnapshot = await getDoc(refQuery);

	return itemListSnapshot.data().list;
};

const getCarouselImgs = async () => {
	const resQuery = collection(firestore, "carouselImg");
	const snapshot = await getDocs(resQuery);

	const data = snapshot.docs.map((item) => ({ id: item.id, ...item.data() }));
	return data;
};

// Métodos POST y PUT

const updateStock = (products) => {
	products.forEach(({ id, stock, count }) => {
		const query = doc(firestore, "products", id);
		updateDoc(query, { stock: stock - count });
	});
};

const sendOrder = async (orderData) => {
	const resQuery = collection(firestore, "orders");
	const response = await addDoc(resQuery, orderData);
	updateStock(orderData.items);
	return response.id;
};

const updateProductsList = async () => {
	const updatedData = products.map((item) => {
		delete item.id;
		return item;
	});
	const resQuery = collection(firestore, "products");

	for (const item of updatedData) {
		await addDoc(resQuery, item);
	}
};

const deleteFavouriteProduct = async (itemId) => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const snapshot = await getDoc(refQuery);

	const filterData = snapshot
		.data()
		.itemsId.filter((productoId) => productoId !== itemId);

	updateDoc(refQuery, { itemsId: filterData });
};

const addProductToFavourite = async (id) => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const snapshot = await getDoc(refQuery);

	const updatedData = [...snapshot.data().itemsId, id];

	updateDoc(refQuery, { itemsId: updatedData });
};

const isInFavourite = async (id) => {
	const refQuery = doc(firestore, "favouriteItems", "8qHOZimOypDaaGtCkY6s");
	const snapshot = await getDoc(refQuery);

	return snapshot.data().itemsId.includes(id);
};

export {
	firestore,
	getProduct,
	getFilterProducts,
	getProducts,
	getFavouriteProducts,
	sendOrder,
	updateProductsList,
	deleteFavouriteProduct,
	addProductToFavourite,
	isInFavourite,
	getOffers,
	getCarouselImgs,
};
