import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CustomButton.css";

const CustomButton = ({ icon, handleFunction, style }) => {
	return (
		<button onClick={handleFunction} className="custom-button" style={style}>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default CustomButton;
