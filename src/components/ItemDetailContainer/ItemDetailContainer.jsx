import { useState, useEffect, useCallback } from "react";

import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";

import { getProduct } from "../../services/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
	const [product, setProduct] = useState({});

	const { productId } = useParams();

	const getItem = useCallback(async () => {
		const res = await getProduct(productId);
		setProduct(res);
	}, [productId]);

	useEffect(() => {
		getItem();
	}, [productId, getItem]);

	return (
		<section className="item-detail-container">
			<ItemDetail item={product} />
		</section>
	);
}

export default ItemDetailContainer;
