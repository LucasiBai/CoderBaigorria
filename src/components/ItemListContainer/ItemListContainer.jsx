import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

import { getProducts, getFilterProducts } from "../../services/firestore";

import Loader from "../Loader/Loader";

const ItemListContainer = ({ greeting }) => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const [greet, setGreeting] = useState(greeting);

	const { categoryId } = useParams();

	// Obtenemos los datos
	const getData = useCallback(async () => {
		setLoader(true);
		let data;
		if (!categoryId) {
			setGreeting(greeting);
			data = await getProducts();
		} else {
			setGreeting(categoryId[0].toUpperCase() + categoryId.slice(1));
			data = await getFilterProducts(categoryId);
		}
		setData(data);
		setLoader(false);
	}, [categoryId, greeting]);

	useEffect(() => {
		getData();
	}, [categoryId, getData]);

	return (
		<main>
			{loader ? (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Loader />
				</div>
			) : (
				<ItemList datos={data} greeting={greet} />
			)}
		</main>
	);
};

export default ItemListContainer;
