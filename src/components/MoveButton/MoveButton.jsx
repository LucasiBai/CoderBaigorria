import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const MoveButton = ({ direction, handleSlide }) => {
	return (
		<button
			onClick={handleSlide}
			style={{
				padding: "0.8rem 1rem",
				borderRadius: 100,
				cursor: "pointer",
				border: "none",
			}}
		>
			<FontAwesomeIcon
				icon={direction === "right" ? faAngleRight : faAngleLeft}
			/>
		</button>
	);
};

export default MoveButton;
