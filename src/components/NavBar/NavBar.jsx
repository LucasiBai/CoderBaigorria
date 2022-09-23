import "./NavBar.css";

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

export default function NavBar({ brandImg }) {
	return (
		<nav>
			<div>
				<Link to="/">
					<img src={brandImg} alt="logo" className="nav--logo" />
				</Link>
			</div>
			<ul className="nav--items">
				<li className="nav-item">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-item">
					<Link to="/">Products</Link>
				</li>
				<li className="nav-item">
					<Link to="/">About Us</Link>
				</li>
				<li className="nav-item">
					<Link to="/">
						<CartWidget name="Cart " />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
