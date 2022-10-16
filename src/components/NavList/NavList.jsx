import { useEffect, useState, useCallback } from "react";

import { Link } from "react-router-dom";

import Loader from "../Loader/Loader";

import "./NavList.css";

const NavList = ({ title, getProductsFunction, deleteProductsFunction }) => {
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
			<div className="nav-list--triangulo-equilatero-bottom"></div>
			<p
				style={{ margin: "0 1rem 5px 1rem", color: "aliceblue", fontSize: 17 }}
			>
				{title}
			</p>
			<span style={{ display: "flex", justifyContent: "center" }}>
				<hr />
			</span>

			<div className="nav-item-list--items">
				{isLoading ? (
					<Loader />
				) : (
					listItems.map((item) => (
						<span key={item.id}>
							<Link to={`/item/${item.id}`}>
								<img src={item.img} alt={item.title} />
								<div className="nav-item-list--data">
									<h5>{item.title}</h5>
									<h6>$ {new Intl.NumberFormat().format(item.price)}</h6>
									<button
										onClick={() => {
											deleteProductsFunction(item.id);
										}}
									>
										Eliminar
									</button>
								</div>
							</Link>
						</span>
					))
				)}
			</div>
		</span>
	);
};

export default NavList;
