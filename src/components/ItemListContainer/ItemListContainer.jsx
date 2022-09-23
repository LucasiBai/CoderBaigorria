import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import getProducts from "../../services/mockAPI";

const ItemListContainer = ({ greeting }) => {
	const [data, setData] = useState([]);

	// Obtenemos los datos
	const getData = async () => {
		const data = await getProducts();
		setData(data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<section className="list--box">
			<h2 className="greeting">{greeting}</h2>
			<ItemList datos={data} />
		</section>
	);
};

export default ItemListContainer;
