import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import { getProducts, getFilterProducts } from "../../services/firestore";

import Loader from "../Loader/Loader";
import FullCarousel from "../FullCarousel/FullCarousel";
import ItemList from "../ItemList/ItemList";
import PromotionalCardsContainer from "../PromotionalCardsContainer/PromotionalCardsContainer";

const images = [
	{
		url: "/",
		name: "Casa",
		img: "https://images.unsplash.com/photo-1602872029708-84d970d3382b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
	},
	{
		url: "/",
		name: "holi",
		img: "https://images.unsplash.com/photo-1666009812623-31fb98d10579?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
	},
	{
		url: "/",
		name: "lol",
		img: "https://images.unsplash.com/photo-1666224182627-7dc792e4b419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
	},
	{
		url: "/",
		name: "Machu Pichu Peru",
		img: "https://images.unsplash.com/photo-1666240073343-9801b7b5b949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
	},
	{
		url: "/category/jardin",
		name: "esaaa",
		img: "https://images.unsplash.com/photo-1666060736317-93b546d00a68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80",
	},
];

const itemsPromo = [
	{
		id: 1,
		title: "HASTA 20% OFF EN HOGAR",
		subtitle: "RENOVÁ TU CASA",
		url: "/category/hogar",
		img: "https://http2.mlstatic.com/D_NQ_NP_662815-MLA32618384530_102019-W.webp",
	},
	{
		id: 2,
		title: "HASTA 15% OFF EN JARDÍN",
		subtitle: "ILUMINA TU JARDÍN",
		url: "/category/jardin",
		img: "https://http2.mlstatic.com/D_NQ_NP_846639-MLA49041116784_022022-O.webp",
	},
];

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
		<main
			style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
		>
			{loader ? (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Loader />
				</div>
			) : (
				<React.Fragment>
					<FullCarousel images={images} autoPlay />
					<ItemList datos={data} greeting={"Más vendidos"} />
					<PromotionalCardsContainer
						greeting={"Promos Especiales"}
						items={itemsPromo}
						width={"1fr 1fr"}
					/>
					<ItemList datos={data} greeting={greet} height={2} />
				</React.Fragment>
			)}
		</main>
	);
};

export default ItemListContainer;
