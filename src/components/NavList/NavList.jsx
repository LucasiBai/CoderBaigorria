import { useEffect, useState, useCallback } from "react";

import { Ring } from "@uiball/loaders";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import NavListItem from "../NavListItem/NavListItem";

import "./NavList.css";

const NavList = ({
	title,
	getProductsFunction,
	deleteProductsFunction,
	closeFunction,
	closeButton,
	count,
}) => {
	const [listItems, setListItems] = useState([]);

	const [isLoading, setIsLoading] = useState(true);

	const getItems = useCallback(async () => {
		const items = await getProductsFunction();
		setListItems(items);
		setIsLoading(false);
	}, [getProductsFunction]);

	useEffect(() => {
		getItems();
	}, [listItems, getItems]);

	return (
		<span className="nav-item-list-box">
			<p className="nav-item-list-box__header">
				{title}
				{closeButton && (
					<button className="nav-item-list-box__button" onClick={closeFunction}>
						<FontAwesomeIcon icon={faX} />
					</button>
				)}
			</p>
			<span style={{ display: "flex", justifyContent: "center" }}>
				<hr />
			</span>

			<div
				className="nav-item-list--items"
				style={
					!listItems.length > 0
						? {
								justifyContent: "center",
								display: "flex",
								height: "3rem",
								alignItems: "center",
						  }
						: {}
				}
			>
				{isLoading ? (
					<Ring color="aliceblue" size={30} />
				) : listItems.length > 0 ? (
					listItems.map((item) => (
						<NavListItem
							key={item.id}
							item={item}
							deleteFunction={deleteProductsFunction}
							count={count}
						/>
					))
				) : (
					<p style={{ color: "#d2d9df" }}>{title} se encuentra vacio...</p>
				)}
			</div>
		</span>
	);
};

export default NavList;
