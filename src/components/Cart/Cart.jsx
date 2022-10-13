import React, { useContext, useState } from "react";

import { cartContext } from "../../contexts/cartContext";

import { sendOrder } from "../../services/firestore";

import ItemColumnList from "../ItemColumnList/ItemColumnList";
import EmptyCart from "../EmptyCart/EmptyCart";
import GhostButton from "../GhostButton/GhostButton";
import Checkout from "../Checkout/Checkout";
import Loader from "../Loader/Loader";

const Cart = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [orderSended, setOrderSended] = useState(false);

	const { cart, getTotalPrice, getCartCount, clearCart } =
		useContext(cartContext);

	const makeOrder = async () => {
		setIsLoading(true);
		const order = {
			buyer: {
				name: "Lucas Ignacio",
				phone: "3512315231",
				email: "luquis@gmail.com",
			},
			items: [...cart],
			total: getTotalPrice(),
		};

		const orderId = await sendOrder(order);

		setOrderSended({ ...order, orderId });
		clearCart();
		setIsLoading(false);
	};

	if (orderSended) {
		return <Checkout orderData={orderSended} />;
	}

	if (isLoading) {
		return (
			<section className="list--box">
				<Loader />
			</section>
		);
	}

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
