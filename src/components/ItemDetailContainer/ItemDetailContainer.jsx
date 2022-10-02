import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import "./ItemDetailContainer.css";

import { getProduct } from "../../services/mockAPI";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
	const [product, setProduct] = useState({});

	const { productId } = useParams();

	useEffect(() => {
		const getItem = async () => {
			const res = await getProduct(Number(productId));
			setProduct(res);
		};
		getItem();
	}, [productId]);

	return (
		<section className="item-detail-container">
			<ItemDetail item={product} />
		</section>
	);
}

export default ItemDetailContainer;
