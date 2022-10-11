import React, { useContext } from "react";

import { cartContext } from "../../contexts/cartContext";

import { sendOrder } from "../../services/firestore";

import ItemColumnList from "../ItemColumnList/ItemColumnList";
import EmptyCart from "../EmptyCart/EmptyCart";
import GhostButton from "../GhostButton/GhostButton";

const Cart = () => {
	const { cart, getTotalPrice, getCartCount } = useContext(cartContext);

	const makeOrder = () => {
		const order = {
			buyer: {
				name: "Lucas Ignacio",
				phone: "3512315231",
				email: "luquis@gmail.com",
			},
			items: [...cart],
			total: getTotalPrice(),
		};
		sendOrder(order);
	};

	return (
		<main>
			<section className="list--box">
				<h1>Carrito</h1>
				{!getCartCount() > 0 ? (
					<EmptyCart />
				) : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<ItemColumnList items={cart} />
						<h3>
							El total es{" "}
							<span style={{ fontSize: 35 }}>
								${new Intl.NumberFormat().format(getTotalPrice().toFixed(2))}
							</span>
						</h3>
						<GhostButton text={"Finalizar compra"} handleFunction={makeOrder} />
					</div>
				)}
			</section>
		</main>
	);
};

export { Cart };
