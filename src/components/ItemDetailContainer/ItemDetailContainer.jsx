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
