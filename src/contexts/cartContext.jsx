import { createContext, useState, useEffect } from "react";

const cartContext = createContext(0);

const CartContextProvider = ({ children }) => {
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
		<cartContext.Provider value={[countCart, onAddToCart]}>
			{children}
		</cartContext.Provider>
	);
};

export { cartContext, CartContextProvider };
