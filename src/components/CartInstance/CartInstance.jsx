import React from "react";

import { Link, useNavigate } from "react-router-dom";

import GhostButton from "../GhostButton/GhostButton";
import Button from "../Button/Button";
import ItemCount from "../ItemCount/ItemCount";
import "./CartInstance.css";

export default function CartInstance({
	initial,
	stock,
	selled,
	count,
	handleFunctions,
}) {
	const navigate = useNavigate();

	const HandleAddAndGoCart = () => {
		handleFunctions[1]();
		navigate("/cart");
	};

	return (
		<div className="counter-box">
			<div className="send-info">
				<h4>Envío a todo el pais</h4>
				<Link>
					<h5>Ver costos de envío</h5>
				</Link>
			</div>

			<div className="count">
				<h4>
					Stock disponible {stock} | {selled ? selled : "0"} vendidos
				</h4>
				<ItemCount
					className="counter-box__item"
					count={count}
					initial={initial}
					stock={stock}
					margin={"0.2rem"}
					handleFunction={handleFunctions[0]}
				/>
			</div>

			<div className="add-buttons">
				{stock ? (
					<Button
						text="Comprar ahora"
						onClick={HandleAddAndGoCart}
						className="counter-box__item"
					/>
				) : (
					<></>
				)}
				<GhostButton
					text={stock ? "Agregar al carrito" : "Sin stock disponible"}
					className={stock ? "" : "disabled"}
					handleFunction={handleFunctions[1]}
				/>
			</div>

			<h6>Garantía de 12 meses de fábrica.</h6>
		</div>
	);
}
