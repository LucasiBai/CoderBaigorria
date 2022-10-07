import React, { useContext } from "react";

import { cartContext } from "../../contexts/cartContext";
import ItemColumnList from "../ItemColumnList/ItemColumnList";
import EmptyCart from "../EmptyCart/EmptyCart";
import Card from "../Card/Card";

const Cart = () => {
	const { cart, getTotalPrice, getCartCount } = useContext(cartContext);

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
							<span style={{ fontSize: 35 }}>${getTotalPrice()}</span>
						</h3>
					</div>
				)}
			</section>
		</main>
	);
};

export { Cart };
