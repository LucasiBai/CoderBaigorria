import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar({ brandImg }) {
	return (
		<nav>
			<div>
				<a href="#">
					<img src={brandImg} alt="logo" className="nav--logo" />
				</a>
			</div>
			<ul className="nav--items">
				<li className="nav-item">
					<a href="#">Home</a>
				</li>
				<li className="nav-item">
					<a href="#">Products</a>
				</li>
				<li className="nav-item">
					<a href="#">About Us</a>
				</li>
				<li className="nav-item">
					<a href="#">
						<CartWidget name="Cart " />
					</a>
				</li>
			</ul>
		</nav>
	);
}
