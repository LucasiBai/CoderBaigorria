import React, { useState, useEffect, useContext } from "react";
import { cartContext } from "../../contexts/cartContext";

import CartInstance from "../CartInstance/CartInstance";
import Loader from "../Loader/Loader";

import "./ItemDetail.css";

function ItemDetail({ id, title, img, price, detail, stock }) {
	const [count, setCount] = useState(1);

	const cartCountContext = useContext(cartContext);

	const onCountChange = (count) => {
		setCount(count);
	};
	const onAddToCart = () => {
		cartCountContext[1](id, count);
	};

	useEffect(() => onCountChange(count), [count]);

	return (
		<article className="detail-item">
			{!title ? (
				<Loader />
			) : (
				<React.Fragment>
					<div className="detail-img">
						<img src={img} alt={title} className="detail-img-item" />
					</div>
					<div className="detail-description">
						<h2 className="detail-description__title">{title}</h2>
						<div className="detail-description__price-box">
							<h4 className="detail-description__price">${price}</h4>
							<h4 className="detail-description__cuotas">
								en 12x ${(price / 12).toFixed(2)}
							</h4>
							<a href="">Ver los medios de pago</a>
						</div>

						<div className="detail-description__data">
							<h4>Lo que tenés que saber de este producto</h4>
							<ul>{detail}</ul>
							<a href="">Ver más características</a>
						</div>
					</div>
					<CartInstance
						stock={stock}
						initial={1}
						price={price}
						count={count}
						handleFunctions={[onCountChange, onAddToCart]}
						addToCart={false}
					/>
				</React.Fragment>
			)}
		</article>
	);
}

export default ItemDetail;
