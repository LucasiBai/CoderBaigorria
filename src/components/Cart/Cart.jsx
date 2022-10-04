import { useContext } from "react";

import { cartContext } from "../../contexts/cartContext";
import LandscapeCard from "../LandscapeCard/LandscapeCard";

const Cart = () => {
	const { cart, getTotalPrice } = useContext(cartContext);

	return (
		<main>
			<section className="list--box">
				<h1>Carrito</h1>
				<ul>
					{cart.map((item) => (
						<LandscapeCard key={item.id} item={item} mode="cart" />
					))}
				</ul>
				<h3>El total es {getTotalPrice()}</h3>
			</section>
		</main>
	);
};

export { Cart };
