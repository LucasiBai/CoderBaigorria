import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
	return (
		<span>
			<FontAwesomeIcon icon={faCartPlus} />
		</span>
	);
};

export default CartWidget;
