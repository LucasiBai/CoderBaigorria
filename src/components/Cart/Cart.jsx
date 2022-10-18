import React, { useContext, useState } from "react";

import { cartContext } from "../../contexts/cartContext";

import { sendOrder } from "../../services/firestore";

import ItemColumnList from "../ItemColumnList/ItemColumnList";
import EmptyCart from "../EmptyCart/EmptyCart";
import GhostButton from "../GhostButton/GhostButton";
import Checkout from "../Checkout/Checkout";
import Loader from "../Loader/Loader";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import "./Cart.css";

const Cart = () => {
	const [isLoading, setIsLoading] = useState(false);

	const [orderSended, setOrderSended] = useState(false);

	const [askingBuyerData, setAskingBuyerData] = useState(false);

	const { cart, getTotalPrice, getCartCount, clearCart, getBuyerData } =
		useContext(cartContext);

	const makeOrder = async () => {
		setIsLoading(true);
		const order = {
			buyer: getBuyerData(),
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
			<section className="list--box cart-box">
				<h1 className="cart-title">Carrito</h1>
				{!getCartCount() > 0 ? (
					<EmptyCart />
				) : askingBuyerData ? (
					<CheckoutForm onSubmit={makeOrder} />
				) : (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<ItemColumnList items={cart} />
						<hr />
						<h3>
							El total es{" "}
							<span style={{ fontSize: 35 }}>
								${new Intl.NumberFormat().format(getTotalPrice().toFixed(2))}
							</span>
						</h3>
						<hr />
						<GhostButton
							text={"Continuar compra"}
							handleFunction={() => setAskingBuyerData(true)}
						/>
					</div>
				)}
			</section>
		</main>
	);
};

export { Cart };
