import { useState } from "react";
import GhostButton from "../GhostButton/GhostButton";
import "./ItemCount.css";

export default function ItemCount({ itemName, initial, stock, img }) {
	const [itemCount, setItemCount] = useState(initial);

	const changeItemCount = (operation) => {
		if (itemCount === initial && operation === "rest") return;
		if (itemCount === stock && operation === "sum") return;

		operation === "sum"
			? setItemCount(itemCount + 1)
			: setItemCount(itemCount - 1);
	};

	return (
		<div className="counter-box">
			<h4 className="counter-box__item">{itemName}</h4>
			<img src={img} alt={itemName} className="card--img" />
			<div className="counter-box__item">
				<button
					onClick={() => {
						changeItemCount("rest");
					}}
					className="counter-button"
				>
					-
				</button>
				<span>{itemCount}</span>
				<button
					onClick={() => {
						changeItemCount("sum");
					}}
					className="counter-button"
				>
					+
				</button>
			</div>
			<GhostButton text="Agregar al carrito" className="counter-box__item" />
		</div>
	);
}
