import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CustomButton.css";

const CustomButton = ({ icon, className, handleFunction, style }) => {
	return (
		<button
			onClick={handleFunction}
			className={`custom-button ${className && className}`}
			style={style}
		>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default CustomButton;
