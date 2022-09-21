import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ initial, stock, margin }) {
	const [itemCount, setItemCount] = useState(initial);

	const changeItemCount = (operation) => {
		if (itemCount === initial && operation === "rest") return;
		if (itemCount === stock && operation === "sum") return;

		operation === "sum"
			? setItemCount(itemCount + 1)
			: setItemCount(itemCount - 1);
	};

	return (
		<div className="counter-box-display" style={{ margin: margin }}>
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
	);
}
