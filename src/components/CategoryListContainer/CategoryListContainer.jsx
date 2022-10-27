import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import {
	getFilterProducts,
	getOffers,
	getBgCategory,
} from "../../services/firestore";

import Loader from "../Loader/Loader";

import ItemList from "../ItemList/ItemList";
import PromotionalCardsContainer from "../PromotionalCardsContainer/PromotionalCardsContainer";
import CategoryTitle from "../CategoryTitle/CategoryTitle";

const CategoryListContainer = () => {
	const [loader, setLoader] = useState(true);

	const [data, setData] = useState([]);
	const [greet, setGreeting] = useState("");
	const [offers, setOffers] = useState([]);
	const [backgroundImg, setBackgroundImg] = useState("");

	const { categoryId } = useParams();

	// Obtenemos los datos
	const getData = useCallback(async () => {
		setLoader(true);

		// Obtener productos
		setGreeting(categoryId[0].toUpperCase() + categoryId.slice(1));
		const data = await getFilterProducts(categoryId);
		setData(data);

		// Obtener Ofertas
		const resOffer = await getOffers();
		setOffers(resOffer);

		// Obtener category BG
		const resBG = await getBgCategory(categoryId);
		setBackgroundImg(resBG);

		setLoader(false);
	}, [categoryId]);

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
					<CategoryTitle greeting={greet} img={backgroundImg} />
					<PromotionalCardsContainer
						greeting={"Promos Especiales"}
						items={offers}
						width={"1fr 1fr"}
					/>
					<ItemList datos={data} greeting={greet} height={3} />
					<ItemList datos={data} greeting={"Más vendidos"} />
				</React.Fragment>
			)}
		</main>
	);
};

export default CategoryListContainer;
