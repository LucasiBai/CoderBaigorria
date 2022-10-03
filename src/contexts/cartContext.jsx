import { createContext, useState } from "react";

const cartContext = createContext(0);

const CartContextProvider = ({ children }) => {
	// Estados
	const [cart, setCart] = useState([]);

	// Funciones

	// Agregar productos al carrito
	const addItem = (item, count) => {
		if (isInCart(item.id)) {
			const updatedCart = cart.map((prod) => {
				prod.id === item.id && (prod.count += count);
				return prod;
			});
			setCart(updatedCart);
		} else {
			const newItem = { ...item, count };
			setCart([...cart, newItem]);
		}
		console.log(cart);
	};

	// Eliminar item del carrito
	const removeItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	// Limpiar carrito
	const clearCart = () => {
		setCart([]);
	};

	// Comprobar si está en el carrito
	const isInCart = (id) => {
		return cart.some((item) => item.id === id);
	};

	// Retornar Cantidad de items de un producto
	const getItemCount = (id) => {
		const item = cart.find((item) => item.id === id) || 0;
		return item ? item.count : 0;
	};

	// Retornar total de objetos en carrito
	const getCartCount = () => {
		return cart.map((item) => item.count).reduce((a, b) => a + b, 0);
	};

	return (
		<cartContext.Provider
			value={{
				cart,
				addItem,
				removeItem,
				clearCart,
				isInCart,
				getItemCount,
				getCartCount,
			}}
		>
			{children}
		</cartContext.Provider>
	);
};

export { cartContext, CartContextProvider };
