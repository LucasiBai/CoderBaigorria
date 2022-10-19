import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "./NavListContainer.css";
import NavList from "../NavList/NavList";

const NavListContainer = ({
	children,
	getProductsFunction,
	deleteProductsFunction,
	count,
	arrow,
}) => {
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
				<span
					style={{ fontSize: 10, color: "#f0f8ff94", position: "relative" }}
				>
					{arrow && <FontAwesomeIcon icon={faAngleDown} />}
					{isOver && (
						<div
							className="nav-list--triangulo-equilatero-bottom"
							style={!arrow ? { left: -13, top: 2 } : {}}
						/>
					)}
				</span>
			</p>
			{isOver && (
				<NavList
					title={children}
					getProductsFunction={getProductsFunction}
					deleteProductsFunction={deleteProductsFunction}
					count={count}
				/>
			)}
		</div>
	);
};

export default NavListContainer;
