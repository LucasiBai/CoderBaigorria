import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import { getProducts, getFilterProducts } from "../../services/firestore";
import Loader from "../Loader/Loader";
import MoveButton from "../MoveButton/MoveButton";

const ItemListContainer = ({ greeting }) => {
	const [data, setData] = useState([]);
	const [loader, setLoader] = useState(true);
	const [greet, setGreeting] = useState(greeting);

	const { categoryId } = useParams();

	// Obtenemos los datos
	// const getData = useCallback(async () => {
	// 	setLoader(true);
	// 	let data;
	// 	if (!categoryId) {
	// 		setGreeting(greeting);
	// 		data = await getProducts();
	// 	} else {
	// 		setGreeting(categoryId[0].toUpperCase() + categoryId.slice(1));
	// 		data = await getFilterProducts(categoryId);
	// 	}
	// 	await setData(data);
	// 	setLoader(false);
	// }, [categoryId, greeting]);

	const slideCards = (direction) => {
		const slider = document.getElementById("slider");

		direction === "right"
			? (slider.scrollLeft += 617)
			: (slider.scrollLeft -= 617);
	};

	useEffect(() => {
		setGreeting(greeting);
		getProducts(setData);
		setLoader(false);
	}, [
		categoryId,
		greeting,
		data,
		// , getData
	]);

	return (
		<section className="list--box">
			<h2 className="greeting">{greet}</h2>
			{loader ? (
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Loader />
				</div>
			) : (
				<div className="list--slider--box">
					<MoveButton
						className={`slider-left-button `}
						direction={"left"}
						handleSlide={() => slideCards("left")}
					/>
					<ItemList datos={data} />
					<MoveButton
						className={"slider-right-button"}
						direction={"right"}
						handleSlide={() => slideCards("right")}
					/>
				</div>
			)}
		</section>
	);
};

export default ItemListContainer;
