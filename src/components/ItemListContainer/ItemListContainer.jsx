import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import { getProducts, getFilterProducts } from "../../services/firestore";

import Loader from "../Loader/Loader";
import FullCarousel from "../FullCarousel/FullCarousel";
import ItemList from "../ItemList/ItemList";

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
				<React.Fragment>
					<FullCarousel />
					<ItemList datos={data} greeting={greet} height={2} />
				</React.Fragment>
			)}
		</main>
	);
};

export default ItemListContainer;
