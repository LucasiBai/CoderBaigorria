import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartContextProvider } from "./contexts/cartContext";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CategoryListContainer from "./components/CategoryListContainer/CategoryListContainer";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Cart } from "./components/Cart/Cart";
import NotFoundPage from "./components/NotFoundPage";
import FavouriteItemsContextProvider from "./contexts/FavouriteItemsContext";

import "./App.css";

function App() {
	return (
		<CartContextProvider>
			<FavouriteItemsContextProvider>
				<BrowserRouter>
					<h1 className="clipped">La Candela Iluminación</h1>
					<Header />
					<Routes>
						<Route
							path="/"
							element={<ItemListContainer greeting="Productos" />}
						/>
						<Route path="/item/:productId" element={<ItemDetailContainer />} />
						<Route
							path="/category/:categoryId"
							element={<CategoryListContainer />}
						/>
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
					<Footer
						brand={"LaCandela"}
						address={"Boulevard 25 de Mayo 325, Morteros"}
						backColor={"#c9d6e1"}
					/>
				</BrowserRouter>
			</FavouriteItemsContextProvider>
		</CartContextProvider>
	);
}

export default App;
