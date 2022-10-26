import React, { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import { getProduct, getProducts, getOffers } from "../../services/firestore";

import ItemList from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";
import PromotionalCardsContainer from "../PromotionalCardsContainer/PromotionalCardsContainer";

import "./ItemDetailContainer.css";

function ItemDetailContainer() {
	const [isLoading, setIsLoading] = useState(true);

	const [product, setProduct] = useState({});
	const [products, setProducts] = useState([]);
	const [offers, setOffers] = useState([]);

	const { productId } = useParams();

	const getData = useCallback(async () => {
		setIsLoading(true);

		// Item principal
		const resItem = await getProduct(productId);
		setProduct(resItem);

		// Items de recomendados
		const resItems = await getProducts();
		setProducts(resItems);

		// Ofertas
		const resOffers = await getOffers();
		setOffers(resOffers);

		setIsLoading(false);
	}, [productId]);

	useEffect(() => {
		getData();
	}, [productId, getData]);

	if (typeof product === "string") {
		return <section className="item-detail-container">{product}</section>;
	}

	return (
		<main className="item-detail-container">
			<ItemDetail item={product} loading={isLoading} />
			{!isLoading && (
				<React.Fragment>
					<ItemList datos={products} greeting={"Recomendados"} />
					<PromotionalCardsContainer
						greeting={"Promos Especiales"}
						items={offers}
						width={"2fr 1fr"}
					/>
				</React.Fragment>
			)}
		</main>
	);
}

export default ItemDetailContainer;
