import "./App.css";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Header";

import { CartCountContext } from "./contexts/CartCountContext";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const [countCart, setCountCart] = useState(4);

	const calculateCount = () => {
		let count = cartItems.map((item) => item.count).reduce((a, b) => a + b, 0);

		setCountCart(count);
	};

	useEffect(() => {
		calculateCount();
	}, [cartItems]);

	const onAddToCart = (itemId, count) => {
		const newItem = {
			itemId: itemId,
			count: count,
		};

		setCartItems([...cartItems, newItem]);
	};

	return (
		<BrowserRouter>
			<CartCountContext.Provider value={[countCart, onAddToCart]}>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route path="/item/:productId" element={<ItemDetailContainer />} />
					<Route path="/category/:categoryId" element={<ItemListContainer />} />
					<Route
						path="/cart"
						element={
							<h1 style={{ margin: "2rem", color: "white" }}>Carrito</h1>
						}
					/>
				</Routes>
			</CartCountContext.Provider>
		</BrowserRouter>
	);
}

export default App;
