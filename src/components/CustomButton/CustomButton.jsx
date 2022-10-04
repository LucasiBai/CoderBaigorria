import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CustomButton = ({ icon, handleFunction }) => {
	return (
		<button onClick={handleFunction}>
			<FontAwesomeIcon icon={icon} />
		</button>
	);
};

export default CustomButton;
