import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";

import { cartContext } from "../../contexts/cartContext";
import ItemColumnList from "../ItemColumnList/ItemColumnList";

const Cart = () => {
	const { cart, getTotalPrice, getCartCount } = useContext(cartContext);

	return (
		<main>
			<section className="list--box">
				<h1>Carrito</h1>
				{!getCartCount() > 0 ? (
					<React.Fragment>
						<h2>
							El carrito se encuentra vacío{" "}
							<span>
								<FontAwesomeIcon icon={faFaceSadCry} />
							</span>
						</h2>
						<Link to="/" style={{ color: "grey" }}>
							¡Te invitamos a ver nuestros productos!
						</Link>
					</React.Fragment>
				) : (
					<React.Fragment>
						<ItemColumnList items={cart} />
						<h3>El total es {getTotalPrice()}</h3>
					</React.Fragment>
				)}
			</section>
		</main>
	);
};

export { Cart };
