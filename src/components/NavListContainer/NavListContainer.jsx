import { useState } from "react";

import {
	getFavouriteProducts,
	deleteFavouriteProduct,
} from "../../services/firestore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./NavListContainer.css";
import NavList from "../NavList/NavList";

const NavListContainer = ({ children }) => {
	const [isOver, setIsOver] = useState(false);

	const mouseOver = (bool) => {
		setTimeout(() => {
			setIsOver(bool);
		}, 370);
	};

	return (
		<div
			onMouseEnter={() => {
				mouseOver(true);
			}}
			onMouseLeave={() => {
				mouseOver(false);
			}}
			className="nav-item-list"
		>
			<p className="nav-item-list--title">
				{children}{" "}
				<span style={{ fontSize: 10, color: "#f0f8ff94" }}>
					<FontAwesomeIcon icon={faAngleDown} />
				</span>
			</p>
			{isOver && (
				<NavList
					title={children}
					getProductsFunction={getFavouriteProducts}
					deleteProductsFunction={deleteFavouriteProduct}
				/>
			)}
		</div>
	);
};

export default NavListContainer;
