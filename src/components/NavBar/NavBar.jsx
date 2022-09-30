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
					<Link to="/category/jardin">Jardín</Link>
				</li>
				<li className="nav-item">
					<Link to="/category/hogar">Hogar</Link>
				</li>
				<li className="nav-item">
					<Link to="/category/habitacion">Habitación</Link>
				</li>
				<li className="nav-item">
					<Link to="/cart">
						Cart
						<CartWidget count={1} />
					</Link>
				</li>
			</ul>
		</nav>
	);
}
