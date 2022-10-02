import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../contexts/cartContext";

import CartInstance from "../CartInstance/CartInstance";
import Loader from "../Loader/Loader";

import "./ItemDetail.css";

function ItemDetail({ item }) {
	const [count, setCount] = useState(1);
	const [stock, setStock] = useState(item.stock);

	const { addItem, getItemCount } = useContext(cartContext);

	const onCountChange = (count) => {
		setCount(count);
	};
	const onAddToCart = () => {
		addItem(item, count);
		setStock(stock - count);
		setCount(1);
	};

	useEffect(
		() => (onCountChange(count), setStock(item.stock - getItemCount(item.id))),
		[count, item.stock],
	);

	return (
		<article className="detail-item">
			{!item.title ? (
				<Loader />
			) : (
				<React.Fragment>
					<div className="detail-img">
						<img src={item.img} alt={item.title} className="detail-img-item" />
					</div>
					<div className="detail-description">
						<h2 className="detail-description__title">{item.title}</h2>
						<div className="detail-description__price-box">
							<h4 className="detail-description__price">${item.price}</h4>
							<h4 className="detail-description__cuotas">
								en 12x ${((item.price * 1.25) / 12).toFixed(2)}
							</h4>
							<a href="">Ver los medios de pago</a>
						</div>

						<div className="detail-description__data">
							<h4>Lo que tenés que saber de este producto</h4>
							<ul>{item.detail}</ul>
							<a href="">Ver más características</a>
						</div>
					</div>
					<CartInstance
						stock={stock}
						initial={1}
						price={item.price}
						count={count}
						handleFunctions={[onCountChange, onAddToCart]}
					/>
				</React.Fragment>
			)}
		</article>
	);
}

export default ItemDetail;
