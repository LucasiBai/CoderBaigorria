import "./NavBar.css";

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";
import ProfileButton from "../ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import CustomSelect from "../CustomSelect/CustomSelect";
import NavListContainer from "../NavListContainer/NavListContainer";

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
						items={[
							{
								title: "Jardín",
								link: "/category/jardin",
							},
							{ title: "Hogar", link: "/category/hogar" },
							{ title: "Habitación", link: "/category/habitacion" },
						]}
					>
						Categorias
					</CustomSelect>
				</li>
				<li className="nav-item">
					<NavListContainer>Favoritos</NavListContainer>
				</li>

				<li className="nav-item">
					<Link to="/cart">
						<CartWidget name={"Carrito"} />
					</Link>
				</li>
				<li className="nav-item">
					<ProfileButton />
				</li>
			</ul>
		</nav>
	);
}
