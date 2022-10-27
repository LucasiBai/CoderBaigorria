import { useState, useEffect } from "react";
import "./ItemCount.css";

export default function ItemCount({
	count,
	initial,
	stock,
	margin,
	handleFunction,
	className,
}) {
	const [itemCount, setItemCount] = useState(initial);

	const changeItemCount = (operation) => {
		const count =
			operation === "sum" && stock > itemCount
				? itemCount + 1
				: operation === "rest" && initial < itemCount
				? itemCount - 1
				: itemCount;

		setItemCount(count);
		handleFunction(count);
	};

	useEffect(() => setItemCount(count), [count]);

	return (
		<div
			className={`counter-box-display ${className && className}`}
			style={{ margin: margin }}
		>
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
					stock === itemCount
						? "counter-button disabled"
						: stock === 0
						? "counter-button disabled"
						: "counter-button"
				}
			>
				+
			</button>
		</div>
	);
}
