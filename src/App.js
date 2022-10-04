import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header";

import { CartContextProvider } from "./contexts/cartContext";
import React from "react";
import { Cart } from "./components/Cart/Cart";
import NotFoundPage from "./components/NotFoundPage";

function App() {
	return (
		<CartContextProvider>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route path="/item/:productId" element={<ItemDetailContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
