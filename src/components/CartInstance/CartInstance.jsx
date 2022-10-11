import React from "react";

import { Link } from "react-router-dom";

import GhostButton from "../GhostButton/GhostButton";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./CartInstance.css";

export default function CartInstance({
	initial,
	stock,
	price,
	count,
	handleFunctions,
}) {
	return (
		<div className="counter-box">
			<h3 className="detail-description__price" id="cart-instance__price">
				${new Intl.NumberFormat().format((price * count).toFixed(2))}
			</h3>
			<div>
				<h3>Cantidad</h3>
				<ItemCount
					className="counter-box__item"
					count={count}
					initial={initial}
					stock={stock}
					margin="0.7rem 0.7rem 1.5rem 0.7rem"
					handleFunction={handleFunctions[0]}
				/>
			</div>
			<Button text="Comprar ahora" className="counter-box__item" />
			<GhostButton
				text={stock ? "Agregar al carrito" : "Sin stock disponible"}
				className={stock ? "" : "disabled"}
				handleFunction={handleFunctions[1]}
			/>
		</div>
	);
}
