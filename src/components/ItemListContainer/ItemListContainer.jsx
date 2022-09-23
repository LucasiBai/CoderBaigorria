import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import getProducts, { getFilterProducts } from "../../services/mockAPI";

const ItemListContainer = ({ greeting }) => {
	const [data, setData] = useState([]);
	const [greet, setGreeting] = useState(greeting);

	const { categoryId } = useParams();
	// Obtenemos los datos
	const getData = async () => {
		if (!categoryId) {
			const data = await getProducts();
			setGreeting(greeting);
			setData(data);
		} else {
			const data = await getFilterProducts(categoryId);
			setGreeting(categoryId[0].toUpperCase() + categoryId.slice(1));
			setData(data);
		}
	};

	useEffect(() => {
		getData();
	}, [data, greet]);

	return (
		<section className="list--box">
			<h2 className="greeting">{greet}</h2>
			<ItemList datos={data} />
		</section>
	);
};

export default ItemListContainer;
