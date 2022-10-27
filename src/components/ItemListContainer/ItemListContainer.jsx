import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import {
	getProducts,
	getFilterProducts,
	getOffers,
	getCarouselImgs,
} from "../../services/firestore";

import Loader from "../Loader/Loader";
import FullCarousel from "../FullCarousel/FullCarousel";
import ItemList from "../ItemList/ItemList";
import PromotionalCardsContainer from "../PromotionalCardsContainer/PromotionalCardsContainer";

const ItemListContainer = ({ greeting }) => {
	const [loader, setLoader] = useState(true);

	const [data, setData] = useState([]);
	const [greet, setGreeting] = useState(greeting);
	const [offers, setOffers] = useState([]);
	const [corouselImgs, setCarouselImgs] = useState([]);

	const { categoryId } = useParams();

	// Obtenemos los datos
	const getData = useCallback(async () => {
		setLoader(true);

		// Obtener productos
		let data;
		if (!categoryId) {
			setGreeting(greeting);
			data = await getProducts();
		} else {
			setGreeting(categoryId[0].toUpperCase() + categoryId.slice(1));
			data = await getFilterProducts(categoryId);
		}
		setData(data);

		// Obtener Ofertas
		const resOffer = await getOffers();
		setOffers(resOffer);

		// Obtener Imágenes Carousel
		const resImgs = await getCarouselImgs();
		setCarouselImgs(resImgs);

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
					<FullCarousel images={corouselImgs} autoPlay />
					<ItemList datos={data} greeting={"Más vendidos"} />
					<PromotionalCardsContainer
						greeting={"Promos Especiales"}
						items={offers}
						width={"1fr 1fr"}
					/>
					<ItemList datos={data} greeting={greet} height={2} />
				</React.Fragment>
			)}
		</main>
	);
};

export default ItemListContainer;
