import { useContext } from "react";

import { Link } from "react-router-dom";

import {
	getFavouriteProducts,
	deleteFavouriteProduct,
} from "../../services/firestore";

import { cartContext } from "../../contexts/cartContext";

import CartWidget from "../CartWidget/CartWidget";
import ProfileButton from "../ProfileButton/ProfileButton";
import SearchBar from "../SearchBar/SearchBar";
import CustomSelect from "../CustomSelect/CustomSelect";
import NavListContainer from "../NavListContainer/NavListContainer";

import "./NavBar.css";

export default function NavBar({ brandImg }) {
	const { cart, getCartProducts, removeItem } = useContext(cartContext);

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
					<NavListContainer
						getProductsFunction={getFavouriteProducts}
						deleteProductsFunction={deleteFavouriteProduct}
						arrow
					>
						Favoritos
					</NavListContainer>
				</li>
				<li className="nav-item">
					{cart.length !== 0 ? (
						<NavListContainer
							getProductsFunction={getCartProducts}
							deleteProductsFunction={removeItem}
							count
							closeButton
						>
							<CartWidget name={"Carrito"} link="/cart" />
						</NavListContainer>
					) : (
						<CartWidget name={"Carrito"} link="/cart" />
					)}
				</li>
				<li className="nav-item">
					<ProfileButton />
				</li>
			</ul>
		</nav>
	);
}
