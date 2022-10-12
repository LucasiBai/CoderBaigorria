import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const ProfileButton = ({ accountData }) => {
	return (
		<span style={{ display: "flex", alignItems: "center", color: "white" }}>
			<FontAwesomeIcon icon={faBell} />
			<img
				src="https://images.unsplash.com/photo-1630208232589-e42b29428b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=769&q=80"
				alt="gpñ"
				style={{
					margin: 5,
					height: 35,
					width: 35,
					objectFit: "cover",
					borderRadius: "100%",
				}}
			/>
		</span>
	);
};

export default ProfileButton;
