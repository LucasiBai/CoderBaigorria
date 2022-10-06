import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CustomButton.css";

const CustomButton = ({ icon, handleFunction }) => {
	return (
		<button onClick={handleFunction} className="custom-button">
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default CustomButton;
