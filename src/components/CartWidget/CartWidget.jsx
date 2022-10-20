import { useContext } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./CartWidget.css";
import { cartContext } from "../../contexts/cartContext";

const CartWidget = ({ name, link }) => {
	const { getCartCount } = useContext(cartContext);

	return (
		<Link to={link}>
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
								left: 14,
								top: "-6px",
							}}
						>
							{getCartCount()}
						</span>
					) : (
						""
					)}
				</span>
			</span>
		</Link>
	);
};

export default CartWidget;
