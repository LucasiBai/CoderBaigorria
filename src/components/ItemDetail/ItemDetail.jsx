import React from "react";
import CartInstance from "../CartInstance/CartInstance";

import "./ItemDetail.css";

function ItemDetail({ title, img, price, detail, stock }) {
	return (
		<article className="detail-item">
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
			<CartInstance stock={stock} initial={1} />
		</article>
	);
}

export default ItemDetail;
