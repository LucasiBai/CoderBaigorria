import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-solid-svg-icons";

const EmptyCart = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<h2 style={{ fontSize: 20 }}>
				El carrito se encuentra vacío{" "}
				<span>
					<FontAwesomeIcon icon={faFaceSadCry} />
				</span>
			</h2>
			<Link to="/" style={{ color: "grey" }}>
				¡Clickea aquí para ver nuestros productos!
			</Link>
		</div>
	);
};

export default EmptyCart;
