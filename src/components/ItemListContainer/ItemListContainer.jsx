import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

import getProducts, { getFilterProducts } from "../../services/mockAPI";
import Loader from "../Loader/Loader";
import MoveButton from "../MoveButton/MoveButton";

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

	const slideCards = (direction) => {
		const slider = document.getElementById("slider");
		slider.scrollLeft =
			direction === "right" ? slider.scrollLeft + 617 : slider.scrollLeft - 617;
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
				<React.Fragment>
					<MoveButton
						direction={"left"}
						handleSlide={() => slideCards("left")}
					/>
					<ItemList datos={data} />
					<MoveButton
						direction={"right"}
						handleSlide={() => slideCards("right")}
					/>
				</React.Fragment>
			)}
		</section>
	);
};

export default ItemListContainer;
