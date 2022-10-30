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
		title: "Lámpara led de pared Ferrolux AP-102 color negro 220V por 1 unidad",
		description:
			"Desde sus inicios en el año 1975, Ferrolux se ha dedicado especialmente al diseño, desarrollo, fabricación y comercialización de artefactos de iluminación. Trabajando en función de la calidad y la innovación e incorporando las últimas tecnologías y optimizando los procesos de producción, se fue forjando como marca líder en el mercado argentino. Así, con el paso del tiempo, fue convirtiéndose en una de las empresas fabricantes más confiables y seguras.",
		price: 3126,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_925167-MLA32706766600_102019-O.webp",
		],
		stock: 5,
		category: "jardin",
		selled: 50,
		rate: 0,
		opinions: [],
	},
	{
		id: 2,
		title: "Lámpara led de pared Faroluz 4314 color negro 220V por 1 unidad",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 1764,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_630469-MLA32706739127_102019-O.webp",
		],
		stock: 15,
		category: "jardin",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 3,
		title: "Farol Solar Exterior Led Fuego Calida Aplique Pared Jardin",
		description: `FAROL ANTORCHA LUZ LED CÁLIDA ESTACA CARGA SOLAR EFECTO LLAMA FUEGO 50CM

    Antorcha con 12 luces LED que vienen dentro de un tubo en color amarillo que simulan ser llamas de fuego. Esta diseñada con una estaca para que se pueda colocar en jardines o en macetas.`,
		price: 2490,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_927060-MLA51505360223_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_790317-MLA52003048493_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_821874-MLA51505337287_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_821082-MLA51505337289_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_985694-MLA51505370192_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_950271-MLA52003151856_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_627576-MLA52003227097_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_790317-MLA52003048493_102022-O.webp",
		],
		stock: 20,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 4,
		title: "Lampara Solar Exterior Jardin Led Adorno Colgante Decoracion",
		description: `LAMPARA JARRO DE VIDRIO COLGANTE LUZ SOLAR


    Alambre 3m 30 LED con energía Solar, lámpara de alambre de cobre plateado, bola de grieta, tarro de vidrio con cuerda, lámpara de decoración de césped y jardín de pared al aire libre.`,
		price: 3594,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_958228-MLA49207146796_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638683-MLA49235807144_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_861470-MLA49235785242_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_857954-MLA49235667842_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_792487-MLA49235667843_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_810559-MLA49235773338_022022-O.webp",
		],
		stock: 12,
		category: "jardin",
		selled: 50,
		rate: 0,
		opinions: [],
	},
	{
		id: 5,
		title: "Set Jardin Completo 2 Farol + 2 Poste 2,5mts + 2 Led 10w 831",
		description: `SET x 2 farol mod 831 + poste 2,5 mts + 2 led 10w

    Especificaciones
    dimension: H=55cm A=31cm
    portalampara:ceramico e27 apto led
    vidrio: 3 mm transparente
    `,
		price: 24000,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_797061-MLA31056605455_062019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_934298-MLA46594348328_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_884823-MLA46594390617_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_949108-MLA46594144791_072021-O.webp",
		],
		stock: 5,
		category: "jardin",
		selled: 10,
		rate: 0,
		opinions: [],
	},
	{
		id: 6,
		title: "Luz Solar Exterior Jardín Cálida Color Estaca Flores Árbol",
		description: `ARBOL CON FLORES LUCES LED CALIDO O MULTICOLOR RGB ENERGÍA SOLAR EXTERIOR CÁLIDA 70 CM 20 LUCES 8 EFECTOS

    Árbol con luces LED con forma de flores de silicona que vienen en dos variantes de color: cálido o multicolor. Posee 8 efectos lumínicos que se pueden cambiar gracias al botón que encuentran en el panel solar.
    
    Se recarga mediante energía solar con el panel que esta incluido en el producto. Necesita de 8 horas de sol para poseer una carga completa de 8 horas de duración. En días nublados o lluviosos, necesitara mas horas o la duración de la batería será menor.`,
		price: 3890,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_912136-MLA51485498183_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_806019-MLA52002863730_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_881922-MLA52002896415_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_980609-MLA52002896416_102022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_924417-MLA51485385554_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_652211-MLA52002863736_102022-O.webp",
		],
		stock: 32,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 7,
		title: "Estaca Luz Solar Alambre Cobre Jardin Fuego Artificial X 2u",
		description: `Estaca solar LED
    50 cables con 3 leds en cada uno: total de 150 leds
    Battery: 1.2V 800 mah
    Solar Panel: 2v
    Material: ABS + acero inoxidable + cables de cobre
    Color luz: CALIDA
    Opiones de luz: Fija o Intermitente
    Nivel impermeabilidad: IP44
    Tiempo de carga - descarga: 6 a 8hs
    Medidas: ver imagenes con detalle
    
    ESTA PUBLICACION es por 2 UNIDADES en caja`,
		price: 7349,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_990888-MLA49283295003_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_898862-MLA49283249201_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_955299-MLA49283269064_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_828584-MLA49283108631_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_702716-MLA49283258192_032022-O.webp",
		],
		stock: 43,
		category: "jardin",
		selled: 10,
		rate: 0,
		opinions: [],
	},
	{
		id: 8,
		title: "Estaca 96 Leds Luz Fotocelda Solar Antorcha Efecto Flama X 2",
		description: `Estaca solar LED
    96 leds
    Battery: 3.7V 1200 mah de litio
    Solar Panel: 2v
    Material: ABS + PVC
    Color luz: CALIDA flama
    Nivel impermeabilidad: IP44
    Tiempo de carga - descarga: 6 a 8hs
    Medidas: 12 cm x 12 cm x 80 cm`,
		price: 8856,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_617432-MLA51526194707_092022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_781608-MLA49283418329_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_969920-MLA49283387573_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_884048-MLA49283342950_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_958102-MLA49283445037_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623270-MLA49283357885_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_710994-MLA49283418386_032022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_2X_773325-MLA49283404585_032022-F.webp",
			"https://http2.mlstatic.com/D_NQ_NP_636949-MLA49283371809_032022-O.webp",
		],
		stock: 23,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 9,
		title: "Estaca Solar Luz 10 Leds Farol Efecto Fuego Calido X 2",
		description: `Estaca solar LED
    10 leds internos SMD
    Battery: 1.2V 600mah
    Solar Panel: 2v 40mah
    Material: ABS + PVC
    Color luz: Efecto Flama
    Nivel impermeabilidad: IP44
    Tiempo de carga: 6 a 8hs
    Descarga: 3 a 5hs
    Medidas: 8 cm × 8 cm × 37 cm
    `,
		price: 2799,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_749354-MLA49221984537_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_810714-MLA49221998290_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_939031-MLA49221984522_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_759767-MLA49221994416_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_949906-MLA49221983551_022022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_701709-MLA49221998305_022022-O.webp",
		],
		stock: 65,
		category: "jardin",
		selled: 21,
		rate: 0,
		opinions: [],
	},
	{
		id: 10,
		title: "Estaca Solar Farol De Jardín Acero Inox. Vidrio Luz Premiun",
		description: `###### ESTACA SOLAR LED FAROL DE ACERO INOXIDABLE GRANDE ######
    ----------------------------------------------------------------------------------------------------------------------
    
    # IDEAL PARA DECORAR JARDÍN, PARQUES, PATIOS Y EXTERIORES
    
    # DURACIÓN: UNA VEZ CON CARGA COMPLETA DURA 8 HS.
    
    # MEDIDAS: 42,5 cm.
    
    # DIÁMETRO: 12 cm.`,
		price: 2990,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_969235-MLA44253296597_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_638262-MLA44253323049_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_972858-MLA44253331903_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_721030-MLA44253322018_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_751662-MLA44253288934_122020-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_627871-MLA44253296719_122020-O.webp",
		],
		stock: 54,
		category: "jardin",
		selled: 3,
		rate: 0,
		opinions: [],
	},
	{
		id: 11,
		title: "Guirnalda Luz Led Solar Bolita 50 Led Transparente Exterior",
		description: `GUIRNALDA BOLITA TRANSPARENTE LUZ LED SOLAR 5M + 2M DE CABLE.
 
    La guirnalda de luz led solar está diseñada para resistir lluvia o derrames de agua. Por lo que es excelente para exteriores como patio trasero, balcón, escaleras, áreas de comedor, etc. 
    
    Especificaciones:
    Panel Solar: 2V 100mA
    Efectos de iluminación: 8
    Cantidad de LED: 50
    Color de luz: blanco cálido
    Material: plástico + pvc
    Horas de carga: 4-8 horas
    Horas de trabajo: 8-12 horas`,
		price: 4280,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_894829-MLA44737350658_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623729-MLA45282361274_032021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_623316-MLA44678984033_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_982717-MLA44678981038_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_984396-MLA44737291466_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_998992-MLA44678967296_012021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_796593-MLA44737256899_012021-O.webp",
		],
		stock: 15,
		category: "jardin",
		selled: 25,
		rate: 0,
		opinions: [],
	},
	{
		id: 12,
		title: "Spot Luz Panel Solar Jardin Exterior Embutir Piso Estaca",
		description: `Farol - Estaca - Luz led - Ideal para jardín, exteriores, patios, parque - Decoración para tu exterior. Somos Hub Integral Solutions.
    Luz cálida, para un toque increíble.
    
    Novedoso Spot Solar - Estaca Solar. Disfruta de darle un toque único a tus espacios.`,
		price: 1964,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_947733-MLA49773610859_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_681568-MLA49773650729_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_773738-MLA49773601920_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_882451-MLA49773786131_042022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_847069-MLA49773663696_042022-O.webp",
		],
		stock: 23,
		category: "jardin",
		selled: 12,
		rate: 0,
		opinions: [],
	},
	{
		id: 13,
		title: "Farol Doble Exterior Jardín Con Columna De 2.5 Mts Apto Led",
		description: `La combinación perfecta entre iluminación y diseño. Esta lámpara le dará vida a tus espacios para que puedas aprovecharlos al máximo. Además, podrás personalizar tus lugares preferidos y darles un detalle distintivo.

      Iluminá tus espacios
      Este modelo es apto para focos con tecnología led, que además de contribuir al cuidado del ambiente, duran más tiempo y te permiten ahorrar hasta un 90 % más que las fuentes de luz convencionales.`,
		price: 19179,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_960744-MLA31015526589_062019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_786198-MLA25608227960_052017-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_636889-MLA25929977295_082017-O.webp",
		],
		stock: 63,
		category: "jardin",
		selled: 4,
		rate: 0,
		opinions: [],
	},
	{
		id: 14,
		title: "Luz Led Solar De Calle O Jardin 40 Smd Iluminacion Lampara",
		description: `SK DISTRIBUTORS, IMPORTAMOS CALIDAD
    DISTRIBUIDORES OFICIALES DE PRODUCTOS DITRON
    
    Hacemos Facturas de Tipo " A " y " B"
    ===============
    DESCRIPCIÓN:
    
    Lampara Solar Led Interior/Exterior
    
    Cantidad de led: 40 smd
    Tipo de material: ABS Plastico + Acrilico
    Panel solar: 5.5v/1.5w
    Voltaje de uso: 5v
    Sensor de movimiento
    Tiempo de carga: 6-8H
    Tiempo de uso continuo: 3H
    Tiempo de uso con sensor de movimiento: 6-8H`,
		price: 3999,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_683847-MLA50303092441_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_772837-MLA50303105393_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_907635-MLA50303003720_062022-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_990427-MLA50302958996_062022-O.webp",
		],
		stock: 18,
		category: "jardin",
		selled: 20,
		rate: 0,
		opinions: [],
	},
	{
		id: 15,
		title: "Farol Marca Sendero Iluminacion Jardin 40cm Ferrolux + Led",
		description: `Farol de pie, marca sendero metálico, con 4 caras de vidrio satinado + Foco LED 9w!

    Decora e ilumina tus jardines, parques y senderos!
    Acepta lámparas de led y bajo consumo
    
    ESPECIFICACIONES:
    
    - Material: Metal y vidrio satinado
    - Medida: 40cm x 14cm
    - Color: Negro
    - Portalámpara: rosca común E27
    - Tension: 230V
    - Frecuencia: 50hz
    `,
		price: 4999,
		img: [
			"https://http2.mlstatic.com/D_NQ_NP_914263-MLA46856599791_072021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_709364-MLA40161709674_122019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_742911-MLA40161751028_122019-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_686024-MLA46542844083_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_672156-MLA46542763642_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_739179-MLA46542770587_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_880509-MLA46542835185_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_703277-MLA46542828197_062021-O.webp",
			"https://http2.mlstatic.com/D_NQ_NP_901897-MLA46542833185_062021-O.webp",
		],
		stock: 88,
		category: "jardin",
		selled: 24,
		rate: 0,
		opinions: [],
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

const getBgCategory = async (category) => {
	const imgs = await getCarouselImgs();
	const img = imgs.find((item) => item.name === category);
	return img.img;
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

const sendContactData = async (contactData) => {
	const resQuery = collection(firestore, "messages");
	const response = await addDoc(resQuery, contactData);

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
	sendContactData,
	updateProductsList,
	deleteFavouriteProduct,
	addProductToFavourite,
	isInFavourite,
	getOffers,
	getCarouselImgs,
	getBgCategory,
};
