import { useState, useEffect } from "react";

import "./ItemDetailContainer.css";

import { getProduct } from "../../services/mockAPI";
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
	const [product, setProduct] = useState({ stock: 1 });

	useEffect(() => {
		const getItem = async () => {
			const res = await getProduct(5);
			setProduct(res);
		};
		getItem();
	}, [product]);

	return (
		<section className="item-detail-container">
			<ItemDetail
				title={product.title}
				img={product.img}
				price={product.price}
				detail={product.description}
				stock={product.stock}
			/>
		</section>
	);
}

export default ItemDetailContainer;
