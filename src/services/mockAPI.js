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
		description: "Occupational exposure to extreme temperature",
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
];

export default function getProducts() {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(products), 2000);
	});
}

export function getFilterProducts(categoryId) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(products.filter((item) => item.category === categoryId)),
			2000,
		);
	});
}

export function getProduct(itemId) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(products.find((item) => item.id === itemId)),
			2000,
		);
	});
}
