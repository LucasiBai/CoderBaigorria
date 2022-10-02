import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import getProducts, { getFilterProducts } from "../../services/mockAPI";
import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const [greet, setGreeting] = useState(greeting);

	const { categoryId } = useParams();

	// Obtenemos los datos
	const getData = async () => {
		setLoader(true);
		let data;
		if (!categoryId) {
			setGreeting(greeting);
			data = await getProducts();
		} else {
			setGreeting(categoryId[0].toUpperCase() + categoryId.slice(1));
			data = await getFilterProducts(categoryId);
		}
		await setData(data);
		setLoader(false);
	};

	useEffect(() => {
		getData();
	}, [categoryId]);

	return (
		<section className="list--box">
			<h2 className="greeting">{greet}</h2>
			{loader ? (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Loader />
				</div>
			) : (
				<ItemList datos={data} />
			)}
		</section>
	);
};

export default ItemListContainer;
