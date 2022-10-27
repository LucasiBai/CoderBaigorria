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
				<h2 className="cart-title">Carrito</h2>
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
						<div className="cart-price">
							<div className="cart-price--titles">
								<h3>Envío</h3>
								<h3 style={{ fontSize: 32 }}>Total con envío</h3>
							</div>
							<div className="cart-price--counts">
								<h3>$520</h3>
								<h3>
									$
									{new Intl.NumberFormat().format(
										(getTotalPrice() + 520).toFixed(2),
									)}
								</h3>
								<GhostButton
									text={"Continuar compra"}
									handleFunction={() => setAskingBuyerData(true)}
								/>
							</div>
						</div>

						<hr style={{ marginBottom: "6rem" }} />
					</div>
				)}
			</section>
		</main>
	);
};

export { Cart };
