import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./CartWidget.css";
import { cartContext } from "../../contexts/cartContext";

const CartWidget = ({ name }) => {
	const { getCartCount } = useContext(cartContext);

	return (
		<span>
			{name}
			<span className="cart-widget">
				<FontAwesomeIcon icon={faCartPlus} />

				{getCartCount() ? (
					<span
						style={{
							fontSize: 10,
							backgroundColor: "aliceblue",
							borderRadius: 100,
							padding: "0.5px 2.5px",
							color: "#005047",
							position: "absolute",
						}}
					>
						{getCartCount()}
					</span>
				) : (
					""
				)}
			</span>
		</span>
	);
};

export default CartWidget;
