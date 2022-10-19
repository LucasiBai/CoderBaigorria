import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./NavListItem.css";

const NavListItem = ({ item, deleteFunction, count }) => {
	const [itemDeleted, setItemDeleted] = useState(false);

	const deleteItem = (itemId) => {
		setItemDeleted(true);
		deleteFunction(itemId);
	};

	return (
		<span
			className={"item-list--item"}
			style={
				itemDeleted
					? {
							justifyContent: "center",
							height: 60,
							margin: 0,
							backgroundColor: "rgb(91 147 185)",
							color: "aliceblue",
					  }
					: {}
			}
		>
			{itemDeleted ? (
				<React.Fragment>
					<p>¡Item eliminado con éxito!</p>
				</React.Fragment>
			) : (
				<React.Fragment>
					{count && <p style={{ color: "aliceblue" }}>{item.count}x</p>}
					<Link to={`/item/${item.id}`}>
						<img src={item.img} alt={item.title} />
					</Link>
					<div className="nav-item-list--data">
						<Link to={`/item/${item.id}`}>
							<h5>{item.title}</h5>
							<h6>$ {new Intl.NumberFormat().format(item.price)}</h6>
						</Link>

						<button
							onClick={() => {
								deleteItem(item.id);
							}}
						>
							Eliminar
						</button>
					</div>
				</React.Fragment>
			)}
		</span>
	);
};

export default NavListItem;
