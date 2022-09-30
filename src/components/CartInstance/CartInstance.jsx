import React from "react";

import { Link } from "react-router-dom";

import GhostButton from "../GhostButton/GhostButton";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./CartInstance.css";

export default function CartInstance({
	addToCart,
	initial,
	stock,
	price,
	count,
	handleFunctions,
}) {
	return (
		<div className="counter-box">
			{!addToCart ? (
				<React.Fragment>
					<h3 className="detail-description__price" id="cart-instance__price">
						${(price * count).toFixed(2)}
					</h3>
					<div>
						<h3>Cantidad</h3>
						<ItemCount
							className="counter-box__item"
							initial={initial}
							stock={stock}
							margin="0.7rem 0.7rem 1.5rem 0.7rem"
							handleFunction={handleFunctions[0]}
						/>
					</div>
					<Button text="Comprar ahora" className="counter-box__item" />
					<GhostButton
						text="Agregar al carrito"
						className="counter-box__item"
						handleFunction={handleFunctions[1]}
					/>
				</React.Fragment>
			) : (
				<React.Fragment>
					<h3 className="cart-instance__add-elements">{`Se ha agregado ${
						addToCart.count
					} elemento${addToCart.count > 1 ? "s" : ""} al carrito.`}</h3>
					<Link to={"/cart"}>
						<GhostButton text="Ir al Carrito" />
					</Link>
				</React.Fragment>
			)}
		</div>
	);
}
