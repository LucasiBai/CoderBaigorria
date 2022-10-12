import "./NavBar.css";

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import ProfileButton from "../ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar({ brandImg }) {
	return (
		<nav style={{ width: 1200, alignItems: "space-between" }}>
			<div>
				<Link to="/">
					<img src={brandImg} alt="logo" className="nav--logo" />
				</Link>
			</div>

			<ul className="nav--items">
				<li>
					<SearchBar />
				</li>
				<li className="nav-item">
					<Link to="/">Principal</Link>
				</li>
				<li className="nav-item">
					<Link>Categorias</Link>
				</li>
				<li className="nav-item">
					<Link>Favoritos</Link>
				</li>

				{/* <li className="nav-item">
					<Link to="/category/jardin">Jardín</Link>
				</li>
				<li className="nav-item">
					<Link to="/category/hogar">Hogar</Link>
				</li>
				<li className="nav-item">
					<Link to="/category/habitacion">Habitación</Link>
				</li> */}
				<li className="nav-item">
					<Link to="/cart">
						<CartWidget name={"Cart"} />
					</Link>
				</li>
				<li className="nav-item">
					<ProfileButton />
				</li>
			</ul>
		</nav>
	);
}
