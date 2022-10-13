import "./NavBar.css";

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import ProfileButton from "../ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import CustomSelect from "../CustomSelect/CustomSelect";

export default function NavBar({ brandImg }) {
	return (
		<nav style={{ width: 1200, alignItems: "space-between" }}>
			<div>
				<Link to="/">
					<img src={brandImg} alt="logo" className="nav--logo" />
				</Link>
			</div>

			<ul className="nav--items">
				<li>{/* <SearchBar /> */}</li>
				<li className="nav-item">
					<Link to="/">Principal</Link>
				</li>
				<li className="nav-item">
					<CustomSelect
						title="Categorias"
						items={[
							{
								title: "Jardín",
								link: "/category/jardin",
							},
							{ title: "Hogar", link: "/category/hogar" },
							{ title: "Habitación", link: "/category/habitacion" },
						]}
					/>
				</li>
				<li className="nav-item">
					<div style={{ display: "flex", flexDirection: "column" }}>
						<Link>Favoritos</Link>
					</div>
				</li>

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
