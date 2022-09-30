import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./CartWidget.css";
import { CartCountContext } from "../../contexts/CartCountContext";

const CartWidget = ({ name }) => {
	const count = useContext(CartCountContext);

	return (
		<span>
			{name}
			<span className="cart-widget">
				<FontAwesomeIcon icon={faCartPlus} />
				{count[0] ? count[0] : ""}
			</span>
		</span>
	);
};

export default CartWidget;
