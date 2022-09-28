import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ initial, stock, margin, handleFunction }) {
	const [itemCount, setItemCount] = useState(initial);

	const changeItemCount = (operation) => {
		const count = operation === "sum" ? itemCount + 1 : itemCount - 1;

		setItemCount(count);
		handleFunction(count);
	};

	return (
		<div className="counter-box-display" style={{ margin: margin }}>
			<button
				onClick={() => {
					changeItemCount("rest");
				}}
				className={
					initial === itemCount ? "counter-button disabled" : "counter-button"
				}
			>
				-
			</button>
			<span>{itemCount}</span>
			<button
				onClick={() => {
					changeItemCount("sum");
				}}
				className={
					stock === itemCount ? "counter-button disabled" : "counter-button"
				}
			>
				+
			</button>
		</div>
	);
}
